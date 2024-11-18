// components/EcoPulse/ResultsScreen.jsx
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Trophy, Leaf, ChevronRight } from 'lucide-react';
import { TierVisualization } from './TierVisualization';
import { Leaderboard } from './Leaderboard';
import { getRecommendations, getCategoryTotals } from '../../lib/quiz-helpers';
import { tiers, quizQuestions } from '../../lib/quiz-data';

export const ResultsScreen = ({
  name,
  score,
  answers,
  email,
  setEmail,
  quizStats,
  onSubmit,
}) => {
  const currentTier = tiers.find(tier => score >= tier.minScore) || tiers[tiers.length - 1];
  const recommendations = getRecommendations(answers);
  const categoryScores = getCategoryTotals(answers, quizQuestions);

  const categoryIcons = {
    food: '🌱',
    transportation: '🚗',
    packaging: '🗑️',
    clothing: '🛒'
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="text-center mb-8">
          <Trophy className="w-16 h-16 mx-auto mb-4 text-green-500" />
          <h2 className="text-2xl font-bold mb-2">Hi {name}!</h2>
          <p className="text-xl mb-2">Your EcoPulse Score: {score}</p>
          <p className="text-lg text-green-600 font-semibold mb-2">
            Current Tier: {currentTier.name}
          </p>
          {quizStats && (
            <p className="text-md text-gray-600">
              You scored better than {quizStats.percentile}% of other users!
            </p>
          )}
        </div>

        {/* Category Breakdown */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Category Breakdown</h3>
          <div className="space-y-3">
            {Object.entries(categoryScores).map(([category, categoryScore]) => (
              <div 
                key={category}
                className="p-4 border rounded-lg flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{categoryIcons[category]}</span>
                  <div>
                    <p className="font-semibold capitalize">
                      {category}
                    </p>
                    <p className="text-sm text-gray-600">
                      Score: {categoryScore}
                    </p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        <TierVisualization score={score} />

        {quizStats?.leaderboard && <Leaderboard leaderboard={quizStats.leaderboard} />}

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Top Impact Recommendations</h3>
          <ul className="space-y-2">
            {recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-2">
                <Leaf className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <h3 className="text-lg font-semibold">Stay Updated!</h3>
          <p className="text-sm text-gray-600">
            Join our community to track your progress and earn rewards.
          </p>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit">Join</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
