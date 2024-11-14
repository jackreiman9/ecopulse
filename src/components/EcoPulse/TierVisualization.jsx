import React from 'react';
import { tiers } from '../../lib/quiz-data';

export const TierVisualization = ({ score }) => (
  <div className="space-y-4 mb-8">
    <h3 className="text-xl font-bold mb-4">Sustainability Tiers</h3>
    {tiers.map((tier) => (
      <div 
        key={tier.name}
        className={`p-4 rounded-lg ${
          score >= tier.minScore ? tier.color : 'bg-gray-200'
        } ${score >= tier.minScore ? 'text-white' : 'text-gray-600'}`}
      >
        <div className="flex justify-between items-center">
          <span className="font-bold">{tier.name}</span>
          <span>{tier.minScore}+ points</span>
        </div>
        <p className="text-sm mt-1">{tier.description}</p>
      </div>
    ))}
  </div>
);
