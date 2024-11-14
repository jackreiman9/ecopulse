export const simulateBackend = async (score) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const percentile = calculatePercentile(score);
  
  const leaderboard = [
    { name: "Sarah K.", score: Math.max(score + 15, 85) },
    { name: "Michael R.", score: Math.max(score + 10, 82) },
    { name: "Emma T.", score: Math.max(score + 5, 78) },
    { name: "David L.", score: Math.max(score + 2, 75) },
    { name: "Lisa M.", score: Math.max(score - 2, 72) }
  ].sort((a, b) => b.score - a.score);

  return { percentile, leaderboard };
};
