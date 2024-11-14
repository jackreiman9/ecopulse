import { quizQuestions } from '../lib/quiz-data';

export const calculatePercentile = (score) => {
  const mockScores = [45, 48, 50, 52, 55, 58, 60, 62, 65, 68, 70, 72, 75, 78, 80, 82, 85];
  const belowScore = mockScores.filter(s => s < score).length;
  return Math.round((belowScore / mockScores.length) * 100);
};

export const getRecommendations = (answers) => {
  const impactAreas = [];
  
  Object.entries(answers).forEach(([questionIndex, score]) => {
    if (score < 0) {
      const question = quizQuestions[questionIndex];
      impactAreas.push({
        area: question.question,
        impact: question.impact,
        score: score
      });
    }
  });
  
  return impactAreas
    .sort((a, b) => {
      const impactOrder = { high: 3, medium: 2, low: 1 };
      return impactOrder[b.impact] - impactOrder[a.impact] || a.score - b.score;
    })
    .slice(0, 3)
    .map(area => {
      switch(area.impact) {
        case 'high':
          return `High Impact: Consider improving your ${area.area.toLowerCase()} habits.`;
        case 'medium':
          return `Medium Impact: Work on ${area.area.toLowerCase()}.`;
        case 'low':
          return `Quick Win: Enhance your ${area.area.toLowerCase()}.`;
        default:
          return '';
      }
    });
};
