export const quizQuestions = [
  {
    id: 1,
    question: "How often do you eat plant-based meals?",
    category: "food.purchasing",
    options: [
      { text: "Always", score: 2 },
      { text: "Frequently", score: 1 },
      { text: "Sometimes", score: 0 },
      { text: "Rarely", score: -1 },
      { text: "Never", score: -2 },
      { text: "Not Sure", score: 0}
    ],
    impact: "high"
  },
  {
    id: 2,
    question: "How often do you buy local produce?",
    category: "food.purchasing",
    options: [
      { text: "Always", score: 2 },
      { text: "Frequently", score: 1 },
      { text: "Sometimes", score: 0 },
      { text: "Rarely", score: -1 },
      { text: "Never", score: -2 },
      { text: "Not Sure", score: 0}
    ],
    impact: "high"
  },
  {
    id: 3,
    question: "How often do you consider ingredient sourcing when buying food?",
    category: "food.purchasing",
    options: [
      { text: "Always", score: 2 },
      { text: "Frequently", score: 1 },
      { text: "Sometimes", score: 0 },
      { text: "Rarely", score: -1 },
      { text: "Never", score: -2 },
      { text: "Not Sure", score: 0}
    ],
    impact: "medium"
  },
  {
    id: 4,
    question: "How often do you compost your food waste?",
    category: "food.waste",
    options: [
      { text: "Always", score: 2 },
      { text: "Frequently", score: 1 },
      { text: "Sometimes", score: 0 },
      { text: "Rarely", score: -1 },
      { text: "Never", score: -2 },
      { text: "Not Sure", score: 0}
    ],
    impact: "medium"
  },
  {
    id: 5,
    question: "How often do you purchase beverages in single-use packaging?",
    category: "packaging.waste",
    options: [
      { text: "Always", score: 2 },
      { text: "Frequently", score: 1 },
      { text: "Sometimes", score: 0 },
      { text: "Rarely", score: -1 },
      { text: "Never", score: -2 },
      { text: "Not Sure", score: 0}
    ],
    impact: "medium"
  },
  {
    id: 6,
    question: "How often do you use a reusable waterbottle?",
    category: "packaging.waste",
    options: [
      { text: "Always", score: 2 },
      { text: "Frequently", score: 1 },
      { text: "Sometimes", score: 0 },
      { text: "Rarely", score: -1 },
      { text: "Never", score: -2 },
      { text: "Not Sure", score: 0}    
    ],
    impact: "medium"
  },
  {
    id: 7,
    question: "I actively try to reduce my single use plastic consumption",
    category: "packaging.waste",
    options: [
      { text: "Strongly Agree", score: 2 },
      { text: "Somewhat Agree", score: 1 },
      { text: "Neither Agree nor Disagree", score: 0 },
      { text: "Somewhat Disagree", score: -1 },
      { text: "Strongly Disagree", score: -2 },
      { text: "Not Sure", score: 0}
    ],
    impact: "low"
  },
  {
    id: 8,
    question: "How often do you recycle your plastic waste?",
    category: "packaging.waste",
    options: [
            { text: "Always", score: 2 },
      { text: "Frequently", score: 1 },
      { text: "Sometimes", score: 0 },
      { text: "Rarely", score: -1 },
      { text: "Never", score: -2 },
    ],
    impact: "medium"
  },
  {
    id: 9,
    question: "How often do you take public transportation?",
    category: "transportation.choice",
    options: [
      { text: "Always", score: 2 },
      { text: "Frequently", score: 1 },
      { text: "Sometimes", score: 0 },
      { text: "Rarely", score: -1 },
      { text: "Never", score: -2 },
      { text: "Not Applicable", score: 0}
    ],
    impact: "high"
  },
  {
    id: 10,
    question: "How often do you bike instead of taking a car?",
    category: "transportation.choice",
    options: [
      { text: "Always", score: 2 },
      { text: "Frequently", score: 1 },
      { text: "Sometimes", score: 0 },
      { text: "Rarely", score: -1 },
      { text: "Never", score: -2 },
      { text: "Not Applicable", score: 0}
    ],
    impact: "high"
  },
  {
    id: 11,
    question: "How often do you take the stairs instead of the elevator?",
    category: "transportation.mobility",
    options: [
      { text: "Always", score: 2 },
      { text: "Frequently", score: 1 },
      { text: "Sometimes", score: 0 },
      { text: "Rarely", score: -1 },
      { text: "Never", score: -2 },
      { text: "Not Applicable", score: 0}
    ],
    impact: "high"
  },
  {
    id: 12,
    question: "How often do you consider emissions or energy use when choosing transportation options?",
    category: "transportation.options",
    options: [
      { text: "Always", score: 2 },
      { text: "Frequently", score: 1 },
      { text: "Sometimes", score: 0 },
      { text: "Rarely", score: -1 },
      { text: "Never", score: -2 }
    ],
    impact: "high"
  },
  {
    id: 13,
    question: "How often do you purchase new clothes?",
    category: "clothing.purchase",
    options: [
      { text: "Weekly", score: -2 },
      { text: "Monthly", score: -1 },
      { text: "A few times a year", score: 0 },
      { text: "Every few years", score: 1 },
      { text: "Never", score: 2 }
    ],
    impact: "high"
  },
  {
    id: 14,
    question: "How often do you shop secondhand/thrift for clothing?",
    category: "clothing.purchase",
    options: [
      { text: "Always", score: 2 },
      { text: "Frequently", score: 1 },
      { text: "Sometimes", score: 0 },
      { text: "Rarely", score: -1 },
      { text: "Never", score: -2 }
    ],
    impact: "high"
  },
  {
    id: 15,
    question: "How important is ethical sourcing and manufacturing to you when buying from a brand?",
    category: "clothing.purchase",
    options: [
      { text: "Very Important", score: 2 },
      { text: "Somewhat Important", score: 1 },
      { text: "Somewhat Unimportant", score: -1 },
      { text: "Very Unimportant", score: -2 }
    ],
    impact: "medium"
  },
  {
    id: 16,
    question: "What do you do with clothes when you don't want to wear them anymore?",
    category: "clothing.waste",
    options: [
      { text: "Donate them", score: 2 },
      { text: "Sell them", score: 1 },
      { text: "Recylce them", score: 1 },
      { text: "Keep them", score: 0 },
      { text: "Thow them in the garbage", score: -2 }
    ],
    impact: "medium"
  }
];

export const tiers = [
  {
    name: "Eco Champion",
    minScore: 20,
    color: "bg-emerald-500",
    description: "You're a sustainability superstar! Your choices significantly reduce food waste and environmental impact in urban living."
  },
  {
    name: "Green Warrior",
    minScore: 10,
    color: "bg-green-500",
    description: "Great work! You're making conscious choices for sustainable urban living with room for improvement."
  },
  {
    name: "Eco Learner",
    minScore: 0,
    color: "bg-yellow-500",
    description: "You're on the right track! Small changes in your daily routine can make a big difference."
  },
  {
    name: "Beginning Explorer",
    minScore: -10,
    color: "bg-orange-500",
    description: "Starting your sustainability journey! Focus on food waste reduction and energy conservation."
  },
  {
    name: "Sustainability Starter",
    minScore: -20,
    color: "bg-red-500",
    description: "Everyone starts somewhere! Let's work on developing more sustainable habits in your urban lifestyle."
  }
];
