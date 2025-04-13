import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import '../styles/introPage.css';

function IntroPage() {
  useEffect(() => {
    gsap.fromTo(
      '.letter',
      {
        opacity: 0,
        y: 60,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        delay: 0.5,
        stagger: 0.06,
        duration: 0.4,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="loader flex gap-2 font-exo2 text-4xl font-extrabold text-gray-900">
        <div className="letter">M</div>
        <div className="letter">O</div>
        <div className="letter">H</div>
        <div className="letter">I</div>
        <div className="letter">T</div>
        <div className="letter">B</div>
        <div className="letter">H</div>
        <div className="letter">A</div>
        <div className="letter">T</div>
        <div className="letter">I</div>
        <div className="letter">A</div>
      </div>
    </div>
  );
}

export default IntroPage;
