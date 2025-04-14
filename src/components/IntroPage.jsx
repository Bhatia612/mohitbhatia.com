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
        <div className="letter" data-letter = "M">M</div>
        <div className="letter" data-letter = "o">o</div>
        <div className="letter" data-letter = "h">h</div>
        <div className="letter" data-letter = "i">i</div>
        <div className="letter" data-letter = "t">t</div>
        <div className="letter" data-letter = " "> </div>
        <div className="letter" data-letter = "B">B</div>
        <div className="letter" data-letter = "h">h</div>
        <div className="letter" data-letter = "a">a</div>
        <div className="letter" data-letter = "t">t</div>
        <div className="letter" data-letter = "i">i</div>
        <div className="letter" data-letter = "a">a</div>

      </div>
    </div>
  );
}

export default IntroPage;
