import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Trophy } from 'lucide-react';
import { IntroScreen } from './IntroScreen';
import { QuizQuestion } from './QuizQuestion';
import { ResultsScreen } from './ResultsScreen';
import { quizQuestions } from '../../lib/quiz-data';
import { simulateBackend } from '../../services/quiz-api';
import { handleRetakeQuiz, getMainCategory } from '../../utils/quiz-helpers';

export const EcoPulseQuiz = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [name, setName] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quizStats, setQuizStats] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const startQuiz = (quizType) => {
    if (name.trim()) {
      setSelectedQuiz(quizType);
      setShowIntro(false);
    }
  };

  const getCurrentQuestions = () => {
    if (!selectedQuiz) return [];
    return quizQuestions.filter(question => 
      getMainCategory(question.category) === selectedQuiz
    );
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((a, b) => a + b, 0);
  };

  const handleAnswer = async (score) => {
    try {
      const currentQuestions = getCurrentQuestions();
      // Store answer using the actual question ID
      const currentQuestionId = currentQuestions[currentQuestion].id;
      const newAnswers = { ...answers, [currentQuestionId - 1]: score };
      setAnswers(newAnswers);
      
      if (currentQuestion < currentQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setLoading(true);
        const finalScore = Object.values(newAnswers).reduce((a, b) => a + b, 0);
        const stats = await simulateBackend(finalScore);
        setQuizStats(stats);
        setShowResults(true);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error calculating results:', error);
      setLoading(false);
    }
  };

  // Rest of the component stays the same...
};
