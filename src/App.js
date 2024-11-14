// src/App.js
import React from 'react';
import './styles/globals.css';  // Add this import
import { EcoPulseQuiz } from './components/EcoPulse/EcoPulseQuiz';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto py-8">
        <EcoPulseQuiz />
      </div>
    </div>
  );
}

export default App;
