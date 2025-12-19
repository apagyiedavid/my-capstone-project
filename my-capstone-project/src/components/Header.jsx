import React from 'react';
import Navbar from './Navbar'; // Adjust the path to your Navbar component

 const Header = () => {
  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* 1. Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/hero-bg.jpeg')`
        }}
      >
        {/* 2. Blue Overlay Layer */}
        {/* mix-blend-multiply or high opacity blue allows the image to show through */}
        <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
      </div>

      {/* 3. Content Layer */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar sits at the top */}
        <Navbar />

        {/* Hero Content */}
        <div className="container mx-auto px-6 flex-grow flex flex-col justify-center items-start text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-3xl">
            Design Your Future with Precision
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mb-8">
            Experience the perfect blend of aesthetics and performance. 
            Our platform helps you build stunning interfaces in record time.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;