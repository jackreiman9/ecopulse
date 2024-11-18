import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Trophy } from 'lucide-react';
import { IntroScreen } from './IntroScreen';
import { QuizQuestion } from './QuizQuestion';
import { ResultsScreen } from './ResultsScreen';
import { quizQuestions } from '../../lib/quiz-data';
import { simulateBackend } from '../../services/quiz-api';
import { handleRetakeQuiz } from '../../utils/quiz-helpers';

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
    if (!selectedQuiz) return quizQuestions;
    return quizQuestions.filter(question => 
      question.category.split('.')[0] === selectedQuiz
    );
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((a, b) => a + b, 0);
  };

  const handleAnswer = async (score) => {
    try {
      const currentQuestions = getCurrentQuestions();
      // Store answer using the actual question's ID
      const questionId = currentQuestions[currentQuestion].id;
      const newAnswers = { ...answers, [questionId - 1]: score };
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

  if (loading) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-6 text-center">
          <div className="animate-spin w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-4" />
          <p>Calculating your results...</p>
        </CardContent>
      </Card>
    );
  }

  if (submitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-6 text-center">
          <Trophy className="w-16 h-16 mx-auto mb-4 text-green-500" />
          <h2 className="text-2xl font-bold mb-4">Welcome to EcoPulse, {name}!</h2>
          <p className="text-lg mb-4">
            We'll send updates about new challenges and rewards to {email}
          </p>
        </CardContent>
      </Card>
    );
  }

if (showResults) {
    return (
      <ResultsScreen
        name={name}
        score={calculateScore()}
        answers={answers}
        email={email}
        setEmail={setEmail}
        quizStats={quizStats}
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        onRetakeQuiz={(category) => handleRetakeQuiz(
          setShowResults,
          setShowIntro,
          setCurrentQuestion,
          setAnswers,
          startQuiz,
          category,
          answers,         // Pass current answers
          quizQuestions    // Pass questions for filtering
        )}
      />
    );
  }

  if (showIntro) {
    return <IntroScreen 
      onStart={startQuiz} 
      setName={setName}
    />;
  }

  const currentQuestions = getCurrentQuestions();
  return (
    <QuizQuestion
      question={currentQuestions[currentQuestion]}
      currentQuestion={currentQuestion}
      totalQuestions={currentQuestions.length}
      onAnswer={handleAnswer}
      onBack={() => {
        setShowIntro(true);
        setSelectedQuiz(null);
        setCurrentQuestion(0);
      }}
    />
  );
};

export default EcoPulseQuiz;
