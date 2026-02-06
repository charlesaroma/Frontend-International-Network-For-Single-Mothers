import React from 'react';
import { Link } from 'react-router-dom';

const BG_IMAGE = "https://ik.imagekit.io/sbgenu6wj/Internation%20Network%20For%20Single%20Mothers/Bg.png?updatedAt=1770239384463";
const EXTRACTED_IMAGE = "https://ik.imagekit.io/sbgenu6wj/Internation%20Network%20For%20Single%20Mothers/Bg.png?updatedAt=1770239384463";

const HomeHero = () => {
  return (
    <div className="relative w-full h-[calc(110vh-6rem)] overflow-hidden">
      
      {/* Layer 1: Main Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={BG_IMAGE} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Layer 2: Glass Panel */}
      <div 
        className="absolute z-10 bottom-[10%] left-6 w-auto max-w-[90%] md:max-w-none h-auto md:h-full md:bottom-0 md:left-auto right-auto md:right-0 lg:right-[10%] md:w-[40%] lg:w-[28%] flex flex-col justify-center p-8 md:p-0 md:px-12 lg:px-12 rounded-3xl md:rounded-none"
        style={{
          background: 'rgba(245, 245, 221, 0.12)', // #F5F5DD1F
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="max-w-xl flex flex-col items-start gap-2">
          <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-[#F5F5DD] leading-tight font-primary tracking-wide">
            WE DIDN'T<br />
            START WITH<br />
            A <span className="italic">THEORY</span>;<br />
            WE STARTED<br />
            WITH
          </h1>
          
          <div className="text-white leading-none mt-2">
             <span className="block text-4xl md:text-5xl lg:text-6xl font-bold">17,000</span>
             <span className="block text-2xl md:text-3xl lg:text-4xl font-bold mt-1">LIVES</span>
          </div>
          
          <Link 
            to="/join"
            className="inline-flex items-center justify-center text-sm md:text-base font-bold text-white transition-all duration-300 transform hover:scale-105 mt-2 md:mt-6 lg:mt-10"
            style={{
              background: '#7AA0A3',
              borderRadius: '99px',
              padding: '14px 28px',
              whiteSpace: 'nowrap'
            }}
          >
            JOIN THE ASSIGNMENT
          </Link>
        </div>
      </div>

       {/* Layer 3: Extracted Foreground Image */}
       <div className="absolute inset-0 z-20 pointer-events-none">
        <img 
          src={EXTRACTED_IMAGE} 
          alt="Hero Foreground" 
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
};

export default HomeHero;
