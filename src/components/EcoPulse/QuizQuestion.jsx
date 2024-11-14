// components/EcoPulse/QuizQuestion.jsx
import React from 'react';
import { Card, CardContent } from '../ui/card';

export const QuizQuestion = ({ question, currentQuestion, totalQuestions, onAnswer }) => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        {/* Progress indicator */}
        <div className="mb-4">
          <div className="h-2 w-full bg-gray-200 rounded">
            <div 
              className="h-full bg-green-500 rounded transition-all duration-300" 
              style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Question {currentQuestion + 1} of {totalQuestions}
          </p>
        </div>

        {/* Question */}
        <h2 className="text-xl font-semibold mb-6">{question.question}</h2>

        {/* Answer options - Stacked vertically */}
        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option.text}
              onClick={() => onAnswer(option.score)}
              className="w-full p-4 text-left bg-white border border-gray-200 rounded-lg 
                       hover:border-green-500 hover:bg-green-50 transition-all duration-200
                       focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              <div className="flex justify-between items-center">
                <span>{option.text}</span>
                <div className="w-2 h-2 rounded-full bg-gray-200" />
              </div>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

