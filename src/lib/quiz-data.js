export const quizQuestions = [
  {
    id: 1,
    question: "How do you primarily commute?",
    options: [
      { text: "Walk/Bike", score: 3 },
      { text: "Public Transport", score: 2 },
      { text: "Electric Vehicle", score: 1 },
      { text: "Carpool", score: 0 },
      { text: "Drive Alone", score: -2 }
    ],
    impact: "high"
  },
  {
    id: 2,
    question: "How often do you check and plan your food inventory before shopping?",
    options: [
      { text: "Always make a list and stick to it", score: 3 },
      { text: "Usually check but sometimes forget", score: 1 },
      { text: "Occasionally plan ahead", score: 0 },
      { text: "Rarely check inventory", score: -1 },
      { text: "Never plan ahead", score: -2 }
    ],
    impact: "high"
  },
  {
    id: 3,
    question: "What do you typically do with leftover food?",
    options: [
      { text: "Always eat as leftovers or compost", score: 3 },
      { text: "Usually save for later meals", score: 1 },
      { text: "Sometimes save, sometimes discard", score: 0 },
      { text: "Usually ends up discarded", score: -2 },
      { text: "Always throw away", score: -3 }
    ],
    impact: "high"
  },
  {
    id: 4,
    question: "How do you manage your apartment/home energy use?",
    options: [
      { text: "Smart thermostats & LED lights, monitor usage", score: 3 },
      { text: "LED lights and moderate temperature control", score: 1 },
      { text: "Basic energy-saving practices", score: 0 },
      { text: "Minimal energy management", score: -1 },
      { text: "No energy management", score: -2 }
    ],
    impact: "medium"
  },
  {
    id: 5,
    question: "How do you store fresh produce?",
    options: [
      { text: "Properly stored with preservation methods", score: 2 },
      { text: "In appropriate containers/drawers", score: 1 },
      { text: "Basic storage in fridge", score: 0 },
      { text: "Wherever there's space", score: -1 },
      { text: "Don't pay attention to storage", score: -2 }
    ],
    impact: "medium"
  },
  {
    id: 6,
    question: "How often do you buy local, seasonal produce?",
    options: [
      { text: "Almost always", score: 2 },
      { text: "Frequently", score: 1 },
      { text: "Sometimes", score: 0 },
      { text: "Rarely", score: -1 },
      { text: "Never", score: -2 }
    ],
    impact: "medium"
  },
  {
    id: 7,
    question: "What's your approach to urban gardening?",
    options: [
      { text: "Maintain a balcony/window garden", score: 2 },
      { text: "Participate in community garden", score: 1 },
      { text: "Grow herbs indoors", score: 1 },
      { text: "Interested but haven't started", score: 0 },
      { text: "No interest/ability to garden", score: -1 }
    ],
    impact: "low"
  },
  {
    id: 8,
    question: "How do you handle food packaging waste?",
    options: [
      { text: "Bulk shopping with reusable containers", score: 2 },
      { text: "Mostly recyclable packaging", score: 1 },
      { text: "Mix of packaging types", score: 0 },
      { text: "Minimal attention to packaging", score: -1 },
      { text: "No attention to packaging", score: -2 }
    ],
    impact: "medium"
  },
  {
    id: 9,
    question: "What's your approach to water conservation?",
    options: [
      { text: "Multiple water-saving methods", score: 3 },
      { text: "Basic water conservation", score: 1 },
      { text: "Occasional conservation", score: 0 },
      { text: "Minimal attention to water use", score: -2 },
      { text: "No water conservation", score: -3 }
    ],
    impact: "high"
  },
  {
    id: 10,
    question: "How do you handle food approaching expiration?",
    options: [
      { text: "Plan meals around expiration dates", score: 3 },
      { text: "Usually use or freeze", score: 1 },
      { text: "Sometimes check dates", score: 0 },
      { text: "Rarely check dates", score: -2 },
      { text: "Don't track expiration", score: -3 }
    ],
    impact: "high"
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
