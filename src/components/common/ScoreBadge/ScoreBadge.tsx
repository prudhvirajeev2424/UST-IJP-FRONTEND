import React from "react";
import { getScoreColor } from "../../../utils/getScoreColor";

interface Props {
  score: number;
}

const ScoreBadge: React.FC<Props> = ({ score }) => {
  const color = getScoreColor(score);

  return (
    <span
      className="
        text-xs font-semibold
        px-2.5 py-1
        rounded-full
        border
        bg-white
      "
      style={{
        color: color.color,
        backgroundColor: "#ffffff",
        borderColor: color.borderColor,
      }}
    >
      {score}%
    </span>
  );
};

export default ScoreBadge;
