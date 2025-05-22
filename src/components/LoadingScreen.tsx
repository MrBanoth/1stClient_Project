import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50">
      <div className="relative flex items-center justify-center mb-6">
        {/* Animated yellow spinner */}
        <span className="absolute w-32 h-32 rounded-full border-4 border-amber-400 border-t-transparent animate-spin"></span>
        {/* Profile Image */}
        <img
          src="https://yt3.googleusercontent.com/-o1wAHm9HpfFzqL_A_khxHIQFJLhmKS9rZLBJlqCP5T89FEhLHHpVeaDwwitLwjSpmkNi0cr=s160-c-k-c0x00ffffff-no-rj"
          alt="Loading..."
          className="w-28 h-28 rounded-full object-cover border-4 border-amber-400 bg-gray-800 shadow-lg"
        />
      </div>
      <span className="text-2xl font-bold text-amber-400 animate-pulse">Loading...</span>
    </div>
  );
};

export default LoadingScreen;