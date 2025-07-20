import React from 'react';

const SentimentCard = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 my-6">
      <h3 className="text-gray-700 font-semibold mb-2">Overall Sentiment</h3>
      <h2 className="text-2xl font-bold text-red-500 mb-1">Mostly Positive</h2>
      <p className="text-sm text-gray-500 mb-4">Based on 12,345 customer reviews</p>

      {/* Progress Bars */}
      <div className="space-y-4">
        <div className="flex justify-between text-sm mb-1">
          <span>Positive</span>
          <span className="text-green-600">65%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
        </div>

        <div className="flex justify-between text-sm mb-1">
          <span>Neutral</span>
          <span className="text-yellow-600">15%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '15%' }}></div>
        </div>

        <div className="flex justify-between text-sm mb-1">
          <span>Negative</span>
          <span className="text-red-600">20%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-red-500 h-2 rounded-full" style={{ width: '20%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default SentimentCard;
