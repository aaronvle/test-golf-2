import React, { useState, useEffect } from 'react';

interface PracticeProps {
  activeClubs: string[];
  onBack: () => void;
}

const shotShapes = ['straight', 'draw', 'fade', 'punch'];

const Practice: React.FC<PracticeProps> = ({ activeClubs, onBack }) => {
  const [currentClub, setCurrentClub] = useState('');
  const [currentShape, setCurrentShape] = useState('');
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (activeClubs.length > 0) {
      selectRandomShot();
    }
  }, [activeClubs]);

  const selectRandomShot = () => {
    const randomClub = activeClubs[Math.floor(Math.random() * activeClubs.length)];
    const randomShape = shotShapes[Math.floor(Math.random() * shotShapes.length)];
    setCurrentClub(randomClub);
    setCurrentShape(randomShape);
  };

  const handleHit = () => {
    setHits(hits + 1);
    selectRandomShot();
  };

  const handleMiss = () => {
    setMisses(misses + 1);
    selectRandomShot();
  };

  const handleEndPractice = () => {
    setShowResults(true);
  };

  const successRate = hits + misses > 0 ? (hits / (hits + misses)) * 100 : 0;

  if (showResults) {
    return (
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Practice Results</h2>
        <p className="mb-2">Total Shots: {hits + misses}</p>
        <p className="mb-2">Hits: {hits}</p>
        <p className="mb-2">Misses: {misses}</p>
        <p className="text-xl font-bold mb-4">Success Rate: {successRate.toFixed(2)}%</p>
        <button
          onClick={onBack}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Back to Home
        </button>
      </div>
    );
  }

  if (activeClubs.length === 0) {
    return (
      <div className="max-w-md mx-auto text-center">
        <p className="mb-4">Please select clubs in your bag before practicing.</p>
        <button
          onClick={onBack}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Back to Edit Bag
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Practice Session</h2>
      {currentClub && currentShape && (
        <div className="mb-6">
          <p className="text-xl mb-2">Current Shot:</p>
          <p className="text-2xl font-bold mb-1">{currentClub}</p>
          <p className="text-lg">{currentShape}</p>
        </div>
      )}
      <div className="space-x-4 mb-6">
        <button
          onClick={handleHit}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Hit
        </button>
        <button
          onClick={handleMiss}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Miss
        </button>
      </div>
      <button
        onClick={handleEndPractice}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
      >
        End Practice
      </button>
    </div>
  );
};

export default Practice;