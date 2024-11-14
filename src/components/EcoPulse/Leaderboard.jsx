import React from 'react';

export const Leaderboard = ({ leaderboard }) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold mb-4">Top Performers</h3>
    <div className="space-y-2">
      {leaderboard.map((user, index) => (
        <div 
          key={index}
          className="flex items-center justify-between p-3 bg-green-50 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <span className="font-bold text-green-600">#{index + 1}</span>
            <span>{user.name}</span>
          </div>
          <span className="font-semibold">{user.score} points</span>
        </div>
      ))}
    </div>
  </div>
);
