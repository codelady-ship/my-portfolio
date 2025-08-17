import React, { useState, useEffect } from 'react';
import myfoto from '/myfoto.jpeg';
import herobg from '/herobg.png';
import { FaGithub, FaLinkedin, FaWhatsapp  } from 'react-icons/fa';

const texts = [
  'Full Stack Developer',
  'MERN Stack Specialist',
  'React Enthusiast',
  'Back-End Developer',
  'Front-End Developer',
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
 
  <div
    className="h-screen bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row items-center justify-evenly"
    style={{ backgroundImage: `url(${herobg})` }}
  >
      {/* Yazı hissəsi */}
      <div className="text-center lg:text-left mt-10  animate-slide-in-left bg-black bg-opacity-80 p-10 rounded-3xl ">
        <p className="text-lg md:text-xl text-yellow-100 mb-2  tracking-widest uppercase">
          Welcome to my portfolio
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm Antiqa
        </h1>
        <p className="text-xl md:text-3xl text-yellow-100 transition-all duration-500">
          {texts[index]}
        </p>

        {/* Butonlar və sosial sebeke ikonlar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <a
            href="/cv.pdf"
            download
            className="bg-yellow-600 hover:bg-yellow-800 text-white font-semibold py-2 px-6 rounded-full transition duration-300 shadow-lg"
          >
            Download CV
          </a>

          <div className="flex items-center gap-4 text-white text-2xl">
            <a
              href="https://github.com/codelady-ship"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="www.linkedin.com/in/entiqe-celilova-138969208"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
             href="https://wa.me/+994705239928"
             target="_blank"
             rel="noopener noreferrer"
             className="hover:text-yellow-700 transition duration-300"
            >
            <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

     {/* Şəkil hissəsi */}
      <div className="mt-1 lg:mt-0 animate-slide-in-right">
        <img
          src={myfoto}
          alt="Antiqa"
          className="w-48 h-48 md:w-72 md:h-72 border-4 border-yellow-500 rounded-full shadow-2xl spin-equator"
        />
      </div>
    </div>

    
  );
};
export default Hero;
