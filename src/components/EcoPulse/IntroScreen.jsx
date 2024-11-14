import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Leaf, ArrowRight } from 'lucide-react';

export const IntroScreen = ({ onStart, setName }) => (
  <Card className="w-full max-w-2xl mx-auto">
    <CardContent className="p-8 text-center">
      <Leaf className="w-16 h-16 mx-auto mb-6 text-green-500" />
      <h1 className="text-3xl font-bold mb-4">Welcome to EcoPulse</h1>
      <p className="text-lg mb-8">Discover your sustainability score and join our eco-friendly community!</p>
      
      <div className="space-y-6 max-w-md mx-auto">
        <Input 
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          className="text-center"
          required
        />
        <Button 
          onClick={onStart}
          className="w-full"
          size="lg"
        >
          Start Quiz <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </CardContent>
  </Card>
);
