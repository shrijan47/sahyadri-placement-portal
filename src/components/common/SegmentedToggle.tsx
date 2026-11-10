import React from 'react';

export interface SegmentedOption<T extends string> {
  label: string;
  value: T;
}

export interface SegmentedToggleProps<T extends string> {
  options: SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

export const SegmentedToggle = <T extends string>({
  options,
  value,
  onChange,
  className = '',
}: SegmentedToggleProps<T>): React.ReactElement => {
  return (
    <div
      className={`inline-flex items-center p-0.5 bg-slate-100/90 border border-slate-200/80 rounded-full shadow-inner ${className}`}
    >
      {options.map((option) => {
        const isActive = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`
              px-3.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 select-none
              ${
                isActive
                  ? 'bg-[#205A40] text-white shadow-sm'
                  : 'bg-transparent text-slate-600 hover:text-slate-900'
              }
            `}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

