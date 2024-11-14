import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export const QuizQuestion = ({ 
  question, 
  currentQuestion, 
  totalQuestions, 
  onAnswer 
}) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="space-y-4">
          <Progress value={progress} className="w-full" />
          <span className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {totalQuestions}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              onClick={() => onAnswer(option.score)}
              variant="outline"
              className="w-full text-left justify-start h-auto py-3"
            >
              {option.text}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
