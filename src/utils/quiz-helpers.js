import { quizQuestions } from '../lib/quiz-data';

export const calculatePercentile = (score) => {
  const mockScores = [45, 48, 50, 52, 55, 58, 60, 62, 65, 68, 70, 72, 75, 78, 80, 82, 85];
  const belowScore = mockScores.filter(s => s < score).length;
  return Math.round((belowScore / mockScores.length) * 100);
};
// lib/quiz-helpers.js

// Get main category from subcategory string
export const getMainCategory = (category) => {
  return category.split('.')[0];
};

// Filter questions by category
export const getQuestionsByCategory = (questions, category) => {
  return questions.filter(question => 
    getMainCategory(question.category) === category
  );
};

// Get category-specific score
export const getCategoryScore = (answers, questions, category) => {
  const categoryQuestions = getQuestionsByCategory(questions, category);
  const categoryScores = categoryQuestions.map(q => answers[q.id - 1] || 0);
  return categoryScores.reduce((a, b) => a + b, 0);
};

// Get all category totals
export const getCategoryTotals = (answers, questions) => {
  const categories = [...new Set(questions.map(q => getMainCategory(q.category)))];
  
  return categories.reduce((acc, category) => {
    acc[category] = getCategoryScore(answers, questions, category);
    return acc;
  }, {});
};

const formatCategoryForDisplay = (category) => {
  // Convert "category.subcategory" to "category subcategory"
  return category.replace('.', ' ').toLowerCase();
};

export const getRecommendations = (answers) => {
  const impactAreas = [];
  
  Object.entries(answers).forEach(([questionIndex, score]) => {
    if (score < 0) {
      const question = quizQuestions[questionIndex];
      impactAreas.push({
        area: formatCategoryForDisplay(question.category),
        impact: question.impact,
        score: score
      });
    }
  });
  
  // Group by category and take the lowest score for each
  const categoryMap = new Map();
  impactAreas.forEach(item => {
    if (!categoryMap.has(item.area) || item.score < categoryMap.get(item.area).score) {
      categoryMap.set(item.area, item);
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
