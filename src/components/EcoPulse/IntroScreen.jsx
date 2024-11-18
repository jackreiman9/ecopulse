// components/EcoPulse/IntroScreen.jsx
import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';

export const IntroScreen = ({ onStart, setName }) => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const quizzes = [
    {
      id: 'food',
      title: 'Food',
      description: 'Evaluate your household energy consumption',
      icon: '🌱'
    },
    {
      id: 'transportation',
      title: 'Transportation',
      description: 'Assess your travel and commuting habits',
      icon: '🚗'
    },
    {
      id: 'waste',
      title: 'Waste',
      description: 'Review your purchasing and waste patterns',
      icon: '🗑️'
    },
    {
      id: 'consumer',
      title: 'Consumer/Retail',
      description: 'Examine your daily shopping choices',
      icon: '🛒'
    }
  ];

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to EcoPulse</h1>
        <p className="text-gray-600 mb-6">
          Discover your environmental impact and learn how to make a difference.
        </p>
        
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            {quizzes.map((quiz) => (
              <button
                key={quiz.id}
                onClick={() => setSelectedQuiz(quiz.id)}
                className={`p-4 border rounded-lg text-left transition-all duration-200 hover:border-green-500
                          ${selectedQuiz === quiz.id 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-gray-200'}`}
              >
                <div className="text-2xl mb-2">{quiz.icon}</div>
                <h3 className="font-semibold text-lg mb-1">{quiz.title}</h3>
                <p className="text-sm text-gray-600">{quiz.description}</p>
              </button>
            ))}
          </div>

          <button
            onClick={() => onStart(selectedQuiz)}
            disabled={!selectedQuiz}
            className={`w-full py-3 px-6 rounded-lg transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50
                     ${!selectedQuiz 
                       ? 'bg-gray-300 cursor-not-allowed' 
                       : 'bg-green-500 hover:bg-green-600 text-white'}`}
          >
            Start Quiz
          </button>
        </div>
      </CardContent>
    </Card>
  );
};
