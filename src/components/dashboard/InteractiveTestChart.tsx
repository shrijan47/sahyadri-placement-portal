import React, { useState } from 'react';

export interface TestDataPoint {
  code: string;
  name?: string;
  topper: number;
  student: number;
}

interface InteractiveTestChartProps {
  data: readonly TestDataPoint[];
}

// Smooth cubic spline path generator for natural curved charts
function buildSmoothPath(points: { x: number; y: number }[]): string {
  if (points.length === 0) return '';
  if (points.length === 1) return `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  if (points.length === 2) {
    return `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)} L ${points[1].x.toFixed(1)} ${points[1].y.toFixed(1)}`;
  }

  let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i === 0 ? 0 : i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2 < points.length ? i + 2 : i + 1];

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }
  return d;
}

export const InteractiveTestChart: React.FC<InteractiveTestChartProps> = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const width = 640;
  const height = 240;
  const paddingLeft = 45;
  const paddingRight = 30;
  const paddingTop = 24;
  const paddingBottom = 42;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  const yTicks = [0, 20, 40, 60, 80, 100];

  const getX = (index: number) => {
    if (data.length <= 1) return paddingLeft + chartWidth / 2;
    return paddingLeft + (index / (data.length - 1)) * chartWidth;
  };

  const getY = (val: number) => {
    const clamped = Math.max(0, Math.min(100, val));
    return paddingTop + chartHeight - (clamped / 100) * chartHeight;
  };

  const studentPoints = data.map((d, i) => ({ x: getX(i), y: getY(d.student) }));
  const topperPoints = data.map((d, i) => ({ x: getX(i), y: getY(d.topper) }));

  const studentCurvePath = buildSmoothPath(studentPoints);
  const topperCurvePath = buildSmoothPath(topperPoints);

  const studentAreaPath =
    studentPoints.length > 0
      ? `${studentCurvePath} L ${studentPoints[studentPoints.length - 1].x.toFixed(1)} ${(paddingTop + chartHeight).toFixed(1)} L ${studentPoints[0].x.toFixed(1)} ${(paddingTop + chartHeight).toFixed(1)} Z`
      : '';

  return (
    <div className="w-full relative select-none">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Soft Emerald Area Fill Gradient for Student Performance */}
          <linearGradient id="studentAreaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#205A40" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#205A40" stopOpacity="0.00" />
          </linearGradient>

          {/* Subtle Ambient Drop Shadow for Curve Highlights */}
          <filter id="softChartGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#10B981" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Horizontal Grid lines & Y-axis labels */}
        {yTicks.map((tick) => {
          const y = getY(tick);
          return (
            <g key={tick} className="text-slate-400">
              <line
                x1={paddingLeft}
                y1={y}
                x2={width - paddingRight}
                y2={y}
                stroke="#EEF2F6"
                strokeWidth="1"
                strokeDasharray={tick === 0 ? undefined : '3,3'}
              />
              <text
                x={paddingLeft - 10}
                y={y + 3.5}
                textAnchor="end"
                className="text-[10px] fill-slate-400 font-mono font-medium"
              >
                {tick}%
              </text>
            </g>
          );
        })}

        {/* Student Performance Area Gradient */}
        {studentAreaPath && (
          <path d={studentAreaPath} fill="url(#studentAreaGradient)" pointerEvents="none" />
        )}

        {/* Hover Crosshair Guide Line */}
        {hoveredIndex !== null && data[hoveredIndex] && (
          <line
            x1={getX(hoveredIndex)}
            y1={paddingTop}
            x2={getX(hoveredIndex)}
            y2={paddingTop + chartHeight}
            stroke="#94A3B8"
            strokeWidth="1.2"
            strokeDasharray="3,3"
            strokeOpacity="0.8"
          />
        )}

        {/* Cohort Topper Benchmark Curve (Warm Amber Dash) */}
        <path
          d={topperCurvePath}
          fill="none"
          stroke="#F59E0B"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="5,4"
          className="opacity-90"
        />

        {/* Student Trajectory Curve (Sahyadri Emerald Green) */}
        <path
          d={studentCurvePath}
          fill="none"
          stroke="#10B981"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#softChartGlow)"
        />

        {/* X-axis test labels */}
        {data.map((d, i) => {
          const x = getX(i);
          const isHovered = hoveredIndex === i;
          return (
            <text
              key={d.code}
              x={x}
              y={height - 14}
              textAnchor="middle"
              className={`text-[10px] transition-all ${
                isHovered ? 'fill-slate-900 font-bold' : 'fill-slate-500 font-medium'
              }`}
            >
              {d.code}
            </text>
          );
        })}

        {/* Interactive Data Points and Invisible Hit Areas */}
        {data.map((d, i) => {
          const x = getX(i);
          const yTopper = getY(d.topper);
          const yStudent = getY(d.student);
          const isHovered = hoveredIndex === i;

          return (
            <g
              key={d.code}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Invisible touch/hover column target */}
              <rect
                x={x - 24}
                y={paddingTop}
                width={48}
                height={chartHeight}
                fill="transparent"
              />

              {/* Topper Benchmark Marker */}
              <circle
                cx={x}
                cy={yTopper}
                r={isHovered ? 5.5 : 4}
                fill="#F59E0B"
                stroke="#FFFFFF"
                strokeWidth="2"
                className="transition-all duration-150 drop-shadow-xs"
              />

              {/* Student Performance Marker (Green with Outer Halo on Hover) */}
              {isHovered && (
                <circle
                  cx={x}
                  cy={yStudent}
                  r="9"
                  fill="#10B981"
                  opacity="0.25"
                  className="animate-ping"
                />
              )}
              <circle
                cx={x}
                cy={yStudent}
                r={isHovered ? 6 : 4.5}
                fill="#205A40"
                stroke="#FFFFFF"
                strokeWidth="2.2"
                className="transition-all duration-150 drop-shadow-xs"
              />
            </g>
          );
        })}
      </svg>

      {/* Floating Institutional Green Tooltip */}
      {hoveredIndex !== null && data[hoveredIndex] && (
        <div
          className="absolute z-20 pointer-events-none -top-2 bg-slate-900/95 backdrop-blur-md text-white px-3.5 py-2 rounded-xl shadow-xl text-xs transform -translate-x-1/2 transition-all duration-100 border border-slate-700/80 min-w-[170px]"
          style={{
            left: `${((getX(hoveredIndex) / width) * 100).toFixed(1)}%`,
          }}
        >
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-1 mb-1.5 gap-2">
            <span className="font-bold text-[11px] text-slate-100 truncate">
              {data[hoveredIndex].code}
            </span>
            {data[hoveredIndex].name && (
              <span className="text-[10px] text-emerald-400 font-semibold truncate">
                {data[hoveredIndex].name}
              </span>
            )}
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-1.5 text-emerald-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block shadow-xs" />
                Your Score:
              </span>
              <strong className="font-mono text-emerald-300 font-bold">{data[hoveredIndex].student}%</strong>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-1.5 text-amber-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] inline-block shadow-xs" />
                Cohort Topper:
              </span>
              <strong className="font-mono text-amber-300 font-bold">{data[hoveredIndex].topper}%</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
