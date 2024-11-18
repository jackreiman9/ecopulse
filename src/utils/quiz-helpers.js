import { quizQuestions } from '../lib/quiz-data';

export const handleRetakeQuiz = (
  setShowResults,
  setShowIntro,
  setCurrentQuestion,
  setAnswers,
  startQuiz,
  category
) => {
  setShowResults(false);
  setShowIntro(true);
  setCurrentQuestion(0);
  setAnswers({});
  if (category) {
    // If a specific category was selected, start that quiz immediately
    startQuiz(category);
  }
};

export const calculatePercentile = (score) => {
  const mockScores = [45, 48, 50, 52, 55, 58, 60, 62, 65, 68, 70, 72, 75, 78, 80, 82, 85];
  const belowScore = mockScores.filter(s => s < score).length;
  return Math.round((belowScore / mockScores.length) * 100);
};

export const getMainCategory = (category) => {
  return category.split('.')[0];
};

export const getQuestionsByCategory = (questions, category) => {
  return questions.filter(question => 
    getMainCategory(question.category) === category
  );
};

export const getCategoryScore = (answers, questions, category) => {
  const categoryQuestions = getQuestionsByCategory(questions, category);
  const categoryScores = categoryQuestions.map(q => answers[q.id - 1] || 0);
  return categoryScores.reduce((a, b) => a + b, 0);
};

export const getCategoryTotals = (answers, questions) => {
  const categories = [...new Set(questions.map(q => getMainCategory(q.category)))];
  
  return categories.reduce((acc, category) => {
    acc[category] = getCategoryScore(answers, questions, category);
    return acc;
  }, {});
};

const formatCategoryForDisplay = (category) => {
  return category.replace('.', ' ').toLowerCase();
};

export const getRecommendations = (answers) => {
  const impactAreas = [];
  
  Object.entries(answers).forEach(([questionIndex, score]) => {
    if (score < 0) {
      const question = quizQuestions[questionIndex];
      impactAreas.push({
        area: question.category,
        impact: question.impact,
        score: score
      });
    }
  });
  
  const categoryMap = new Map();
  impactAreas.forEach(item => {
    const formattedArea = formatCategoryForDisplay(item.area);
    if (!categoryMap.has(formattedArea) || item.score < categoryMap.get(formattedArea).score) {
      categoryMap.set(formattedArea, {
        ...item,
        area: formattedArea
      });
    }
  });
  
  return Array.from(categoryMap.values())
    .sort((a, b) => {
      const impactOrder = { high: 3, medium: 2, low: 1 };
      return impactOrder[b.impact] - impactOrder[a.impact] || a.score - b.score;
    })
    .slice(0, 3)
    .map(area => {
      switch(area.impact) {
        case 'high':
          return `High Impact: Consider improving your ${area.area} practices.`;
        case 'medium':
          return `Medium Impact: Work on your ${area.area} approach.`;
        case 'low':
          return `Quick Win: Enhance your ${area.area} methods.`;
        default:
          return '';
      }
    });
};
