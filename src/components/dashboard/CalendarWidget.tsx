import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

interface CalendarWidgetProps {
  scheduledTestDates?: number[]; // e.g. [5, 12, 19]
}

export const CalendarWidget: React.FC<CalendarWidgetProps> = ({
  scheduledTestDates = [5, 12],
}) => {
  // Baseline month starts at November 2026 per reference design
  const [currentDate, setCurrentDate] = useState(new Date(2026, 10, 1)); // month is 0-indexed: 10 = November
  const [selectedDay, setSelectedDay] = useState<number | null>(3); // 3 is highlighted in reference

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 = Sunday

  const prevMonthDays = new Date(year, month, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDay(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDay(null);
  };

  // Build calendar matrix
  const days: { day: number; isCurrentMonth: boolean }[] = [];

  // Padding days from previous month
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    days.push({ day: prevMonthDays - i, isCurrentMonth: false });
  }

  // Days of current month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, isCurrentMonth: true });
  }

  // Trailing padding days to fill 35 or 42 cells
  const remainingCells = (7 - (days.length % 7)) % 7;
  for (let i = 1; i <= remainingCells; i++) {
    days.push({ day: i, isCurrentMonth: false });
  }

  return (
    <div className="bg-gradient-calendar text-white p-5 sm:p-6 rounded-3xl shadow-sm select-none">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4 text-white/80" />
          <h3 className="text-sm font-bold tracking-wide">
            {monthNames[month]} {year}
          </h3>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handlePrevMonth}
            className="p-1 rounded-full hover:bg-white/20 transition-colors text-white"
            aria-label="Previous Month"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNextMonth}
            className="p-1 rounded-full hover:bg-white/20 transition-colors text-white"
            aria-label="Next Month"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Days of Week Header */}
      <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-white/70 mb-2">
        <div>SU</div>
        <div>MO</div>
        <div>TU</div>
        <div>WE</div>
        <div>TH</div>
        <div>FR</div>
        <div>SA</div>
      </div>

      {/* Days Matrix */}
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium">
        {days.map((item, idx) => {
          const isSelected = item.isCurrentMonth && selectedDay === item.day;
          const isTestDay =
            item.isCurrentMonth &&
            month === 10 &&
            year === 2026 &&
            scheduledTestDates.includes(item.day);

          return (
            <button
              key={idx}
              type="button"
              disabled={!item.isCurrentMonth}
              onClick={() => item.isCurrentMonth && setSelectedDay(item.day)}
              className={`
                relative py-1.5 rounded-full transition-all flex flex-col items-center justify-center
                ${!item.isCurrentMonth ? 'text-white/25 cursor-default' : 'hover:bg-white/20 cursor-pointer text-white'}
                ${isSelected ? 'bg-[#FF6584] hover:bg-[#FF6584] text-white font-bold shadow-md ring-2 ring-white/40' : ''}
              `}
            >
              <span>{item.day}</span>
              {isTestDay && !isSelected && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 absolute bottom-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {/* Event Details Preview on Selected Day */}
      {selectedDay && (
        <div className="mt-4 pt-3 border-t border-white/20 text-xs text-white/90 flex items-center justify-between">
          <span>
            {monthNames[month]} {selectedDay}, {year}
          </span>
          <span className="text-[11px] font-semibold text-emerald-200">
            {month === 10 && scheduledTestDates.includes(selectedDay)
              ? '📝 Scheduled Placement Assessment'
              : selectedDay === 3
              ? '⭐ Current Cycle Benchmark'
              : 'No Tests Scheduled'}
          </span>
        </div>
      )}
    </div>
  );
};

