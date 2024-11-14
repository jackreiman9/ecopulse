

export const simulateBackend = async (score) => {
  try {
    // Simulate some delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate a distribution of scores
    const simulatedScores = Array.from({ length: 1000 }, () => 
      Math.floor(Math.random() * 40) - 20  // Adjust range to match new scoring (-20 to +20)
    );

    return {
      percentile: calculatePercentile(score, simulatedScores),
      totalParticipants: simulatedScores.length + 1,
      averageScore: Math.round(simulatedScores.reduce((a, b) => a + b, 0) / simulatedScores.length)
    };
  } catch (error) {
    console.error('Error in simulateBackend:', error);
    // Return default values if simulation fails
    return {
      percentile: 50,
      totalParticipants: 1000,
      averageScore: 0
    };
  }
};

const calculatePercentile = (score, allScores) => {
  const below = allScores.filter(s => s < score).length;
  return Math.round((below / allScores.length) * 100);
};
