import { Card, CardContent } from "../../ui";

interface MatchScoreCardProps {
  percentage: number;
}

export function MatchScoreCard({ percentage }: MatchScoreCardProps) {
  const radius = 34;
  const strokeWidth = 16;
  const circumference = 2 * Math.PI * radius;

  const greenLength = (percentage / 100) * circumference;
  const redLength = circumference * 0.07;

  return (
    <Card className="bg-white rounded-2xl shadow-sm border border-gray-100">
      <CardContent className="flex flex-row items-center gap-6 px-8 py-6 mt-8">
        {/* SVG - Left Side */}
        <svg
          width="96"
          height="96"
          viewBox="0 0 100 100"
          className="shrink-0"
          style={{ transform: 'rotate(-90deg)' }}
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
          />

          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#10B981"
            strokeWidth={strokeWidth}
            strokeDasharray={`${greenLength} ${circumference}`}
          />

          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#F87171"
            strokeWidth={strokeWidth}
            strokeDasharray={`${redLength} ${circumference}`}
            strokeDashoffset={-greenLength}
          />
        </svg>

        {/* TEXT - Right Side */}
        <div className="flex flex-col">
          <span className="text-4xl font-semibold text-gray-900 leading-none">
            {percentage}%
          </span>
          <span className="mt-2 text-lg text-gray-500">
            My Fitment
          </span>
        </div>
      </CardContent>
    </Card>
  );
}