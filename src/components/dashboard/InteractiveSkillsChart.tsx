import React, { useState } from 'react';

export interface SkillPoint {
  code: string;
  score: number;
}

interface InteractiveSkillsChartProps {
  data: readonly SkillPoint[];
}

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

export const InteractiveSkillsChart: React.FC<InteractiveSkillsChartProps> = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const width = 640;
  const height = 200;
  const paddingLeft = 45;
  const paddingRight = 30;
  const paddingTop = 20;
  const paddingBottom = 35;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  const minY = 20;
  const maxY = 50;
  const yTicks = [20, 26, 32, 38, 44, 50];

  const getX = (index: number) => {
    if (data.length <= 1) return paddingLeft + chartWidth / 2;
    return paddingLeft + (index / (data.length - 1)) * chartWidth;
  };

  const getY = (val: number) => {
    const clamped = Math.max(minY, Math.min(maxY, val));
    return paddingTop + chartHeight - ((clamped - minY) / (maxY - minY)) * chartHeight;
  };

  const points = data.map((d, i) => ({ x: getX(i), y: getY(d.score) }));
  const smoothCurve = buildSmoothPath(points);

  const areaPath =
    points.length > 0
      ? `${smoothCurve} L ${points[points.length - 1].x.toFixed(1)} ${(paddingTop + chartHeight).toFixed(1)} L ${points[0].x.toFixed(1)} ${(paddingTop + chartHeight).toFixed(1)} Z`
      : '';

  return (
    <div className="w-full relative select-none">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="skillsAreaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.00" />
          </linearGradient>
        </defs>

        {/* Horizontal Grid lines */}
        {yTicks.map((tick) => {
          const y = getY(tick);
          return (
            <g key={tick}>
              <line
                x1={paddingLeft}
                y1={y}
                x2={width - paddingRight}
                y2={y}
                stroke="#EEF2F6"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <text
                x={paddingLeft - 10}
                y={y + 3.5}
                textAnchor="end"
                className="text-[10px] fill-slate-400 font-mono"
              >
                {tick}
              </text>
            </g>
          );
        })}

        {/* Area fill */}
        {areaPath && <path d={areaPath} fill="url(#skillsAreaGradient)" pointerEvents="none" />}

        {/* Hover Crosshair Guide */}
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

        {/* Skill Score Curved Line (Emerald Green) */}
        <path
          d={smoothCurve}
          fill="none"
          stroke="#10B981"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* X-axis labels */}
        {data.map((d, i) => {
          const x = getX(i);
          const isHovered = hoveredIndex === i;
          return (
            <text
              key={d.code}
              x={x}
              y={height - 10}
              textAnchor="middle"
              className={`text-[10px] transition-colors ${
                isHovered ? 'fill-emerald-950 font-bold' : 'fill-slate-500 font-medium'
              }`}
            >
              {d.code}
            </text>
          );
        })}

        {/* Interactive Data Points */}
        {data.map((d, i) => {
          const x = getX(i);
          const y = getY(d.score);
          const isHovered = hoveredIndex === i;

          return (
            <g
              key={d.code}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <rect
                x={x - 24}
                y={paddingTop}
                width={48}
                height={chartHeight}
                fill="transparent"
              />
              {isHovered && (
                <circle cx={x} cy={y} r="8" fill="#10B981" opacity="0.25" className="animate-ping" />
              )}
              <circle
                cx={x}
                cy={y}
                r={isHovered ? 5.5 : 4}
                fill="#205A40"
                stroke="#FFFFFF"
                strokeWidth="2"
                className="transition-all duration-150 drop-shadow-xs"
              />
            </g>
          );
        })}
      </svg>

      {/* Floating Active Tooltip */}
      {hoveredIndex !== null && data[hoveredIndex] && (
        <div
          className="absolute z-20 pointer-events-none -top-1 bg-slate-900/95 backdrop-blur-md text-white px-3 py-1.5 rounded-xl shadow-lg text-xs transform -translate-x-1/2 transition-all duration-100 border border-slate-700/80"
          style={{
            left: `${((getX(hoveredIndex) / width) * 100).toFixed(1)}%`,
          }}
        >
          <div className="font-bold text-[11px] text-slate-200 border-b border-slate-700/80 pb-0.5 mb-1">
            {data[hoveredIndex].code}
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block" />
            <span>Score:</span>
            <strong className="font-mono text-white">{data[hoveredIndex].score} pts</strong>
          </div>
        </div>
      )}
    </div>
  );
};
