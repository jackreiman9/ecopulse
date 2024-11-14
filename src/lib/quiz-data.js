export const quizQuestions = [
  {
    id: 1,
    question: "How do you primarily commute?",
    options: [
      { text: "Walk/Bike", score: 10 },
      { text: "Public Transport", score: 5 },
      { text: "Electric Vehicle", score: 3 },
      { text: "Carpool", score: 0 },
      { text: "Drive Alone", score: -5 },
      { text: "Not Applicable", score: 0 }
    ],
    impact: "high"
  },
  // ... rest of questions
];

export const tiers = [
  {
    name: "Eco Champion",
    minScore: 50,
    color: "bg-emerald-500",
    description: "Leading the way in sustainable living!"
  },
  // ... rest of tiers
];
