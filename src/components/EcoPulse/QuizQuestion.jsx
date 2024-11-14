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

// components/EcoPulse/IntroScreen.jsx
import React from 'react';
import { Card, CardContent } from '../ui/card';

export const IntroScreen = ({ onStart, setName }) => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
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
          
          <button
            onClick={onStart}
            className="w-full bg-green-500 text-white py-3 px-6 rounded-lg
                     hover:bg-green-600 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Start Quiz
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

// components/EcoPulse/ResultsScreen.jsx
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Trophy } from 'lucide-react';

export const ResultsScreen = ({ name, score, quizStats, email, setEmail, onSubmit }) => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="text-center mb-8">
          <Trophy className="w-16 h-16 mx-auto text-green-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Great job, {name}!</h2>
          <p className="text-gray-600">Your sustainability score: {score}</p>
        </div>

        {quizStats && (
          <div className="bg-gray-50 p-4 rounded-lg mb-8">
            <h3 className="font-semibold mb-3">How you compare:</h3>
            <div className="space-y-2">
              <p>You scored better than {quizStats.percentile}% of participants</p>
              <p>Average score: {quizStats.averageScore}</p>
              <p>Total participants: {quizStats.totalParticipants}</p>
            </div>
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for eco-tips"
              className="w-full p-3 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 px-6 rounded-lg
                     hover:bg-green-600 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Get Personalized Tips
          </button>
        </form>
      </CardContent>
    </Card>
  );
};
