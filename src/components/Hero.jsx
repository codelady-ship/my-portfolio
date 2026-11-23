import React, { useState, useEffect } from 'react';
import myfoto from '/myfoto.jpeg';
import herobg from '/herobg.png';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import usePageMeta from '../hooks/usePageMeta';

const texts = [
  'Full Stack Developer',
  'MERN Stack Specialist',
  'React Enthusiast',
  'Back-End Developer',
  'Front-End Developer',
];

const socialLinks = [
  { href: 'https://github.com/codelady-ship', label: 'GitHub profile', Icon: FaGithub },
  { href: 'https://www.linkedin.com/in/entiqe-celilova-138969208', label: 'LinkedIn profile', Icon: FaLinkedin },
  { href: 'https://wa.me/994705239928', label: 'WhatsApp', Icon: FaWhatsapp },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  usePageMeta({
    description:
      'Antiqa Jalilova, full stack (MERN) developer from Azerbaijan. 3D portfolio with projects in React, Next.js, Node.js and MongoDB.',
    path: '/',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="min-h-screen pt-28 pb-12 gap-8 bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row items-center justify-evenly"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      {/* Text */}
      <div className="text-center lg:text-left mx-4 animate-slide-in-left bg-black bg-opacity-80 p-6 sm:p-10 rounded-3xl">
        <p className="text-lg md:text-xl text-yellow-100 mb-2 tracking-widest uppercase">
          Welcome to my portfolio
        </p>
        <p className="inline-block mb-3 px-3 py-0.5 rounded-full border border-yellow-100/40 text-xs text-yellow-100/80 tracking-widest">
          v1 · 2025
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Hi, I'm Antiqa</h1>
        <p className="text-xl md:text-3xl text-yellow-100 transition-all duration-500">{texts[index]}</p>

        {/* CV button and social links */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <a
            href="/cv.pdf"
            download="Antiqa-Jalilova-CV.pdf"
            className="bg-yellow-600 hover:bg-yellow-800 text-white font-semibold py-2 px-6 rounded-full transition duration-300 shadow-lg"
          >
            Download CV
          </a>

          <div className="flex items-center gap-4 text-white text-2xl">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="hover:text-yellow-500 transition duration-300"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Photo */}
      <div className="animate-slide-in-right">
        <img
          src={myfoto}
          alt="Portrait of Antiqa Jalilova"
          width="288"
          height="288"
          className="w-48 h-48 md:w-72 md:h-72 border-4 border-yellow-500 rounded-full shadow-2xl spin-equator"
        />
      </div>
    </section>
  );
};

export default Hero;
