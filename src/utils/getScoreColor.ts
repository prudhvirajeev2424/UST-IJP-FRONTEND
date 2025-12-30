export function getScoreColor(score: number) {
  // Returns a simple set of colors based on bands.
  if (score >= 85) {
    return {
      color: "#065f46", // green-800
      backgroundColor: "#ecfdf5", // green-50
      borderColor: "#86efac",
    };
  }

  if (score >= 70) {
    return {
      color: "#92400e", // amber-800
      backgroundColor: "#fff7ed", // amber-50
      borderColor: "#fcd34d",
    };
  }

  return {
    color: "#991b1b", // red-800
    backgroundColor: "#fff1f2", // red-50
    borderColor: "#fca5a5",
  };
}
