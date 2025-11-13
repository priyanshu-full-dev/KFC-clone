import React from 'react'

const LoadingScreen = ({ isLoading }) => {
    if (!isLoading) return null;
    return (
        <div className="fixed inset-0 bg-red-600 z-[100] flex flex-col items-center justify-center">
      {/* Animated KFC Logo */}
      <div className="relative mb-8">
        <div className="text-white text-9xl font-bold italic animate-pulse">
          KFC
        </div>
        {/* Rotating Circle Around Logo */}
       
      </div>

      {/* Animated Chicken Drumstick */}
      <div className="relative w-24 h-32 mb-8">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-20 bg-yellow-700 rounded-t-full animate-bounce"></div>
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-8 h-12 bg-yellow-200 rounded-full"></div>
      </div>

      {/* Loading Text */}
      <div className="text-white text-xl font-bold mb-4 animate-pulse">
        Preparing Your Order...
      </div>

      {/* Animated Dots */}
      <div className="flex gap-2">
        <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
    )
}

export default LoadingScreen