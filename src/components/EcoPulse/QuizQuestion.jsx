// components/EcoPulse/QuizQuestion.jsx
import React from 'react';
import { Card, CardContent } from '../ui/card';

export const QuizQuestion = ({ 
  question, 
  currentQuestion, 
  totalQuestions, 
  onAnswer,
  onBack 
}) => {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={onBack} 
            className="text-gray-600 hover:text-gray-800"
          >
            ← Back to Categories
          </button>
          <div className="text-gray-600">
            Question {currentQuestion + 1} of {totalQuestions}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mb-8">
          <p className="text-lg">{question.question}</p>
        </div>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option.score)}
              className="w-full p-4 text-left border rounded-lg hover:bg-green-50 
                       hover:border-green-500 transition-colors"
            >
              {option.text}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
