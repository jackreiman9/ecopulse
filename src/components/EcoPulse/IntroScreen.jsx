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

