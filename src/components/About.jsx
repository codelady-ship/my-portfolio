import { useState } from 'react';
import aboutbg from '/aboutbg.png';
import ModelViewer from './model/ModelViewer';
import usePageMeta from '../hooks/usePageMeta';

// Import logos
import htmlLogo from '../assets/tech/html.png';
import cssLogo from '../assets/tech/css.png';
import jsLogo from '../assets/tech/javascript.png';
import reactLogo from '../assets/tech/reactjs.png';
import nodeLogo from '../assets/tech/nodejs.png';
import tailwindLogo from '../assets/tech/tailwind.png';
import typescriptLogo from '../assets/tech/typescript.png';
import nextLogo from '../assets/tech/next.png';
import mongoLogo from '../assets/tech/mongodb.png';
import threejsLogo from '../assets/tech/threejs.png';
import javaLogo from '../assets/tech/java.png';
import gitLogo from '../assets/tech/git.png';
import figmaLogo from '../assets/tech/figma.png';
import vercelLogo from '../assets/tech/vercel.png';
import mongooseLogo from '../assets/tech/mongoose.png';
import postmanLogo from '../assets/tech/postman.png';


const About = () => {
  const [showEducation, setShowEducation] = useState(false);
  usePageMeta({
    title: 'About',
    description: 'About Antiqa Jalilova: skills (React, Node.js, MongoDB, Next.js, Java) and courses (Jet Academy MERN, TechnoEra Java, Andersen QA).',
    path: '/about',
  });

  const techStack = [
  { src: htmlLogo, name: 'HTML' },
  { src: cssLogo, name: 'CSS' },
  { src: jsLogo, name: 'JavaScript' },
  { src: reactLogo, name: 'React' },
  { src: nodeLogo, name: 'Node.js' },
  { src: tailwindLogo, name: 'Tailwind' },
  { src: typescriptLogo, name: 'TypeScript' },
  { src: nextLogo, name: 'Next.js' },
  { src: mongoLogo, name: 'MongoDB' },
  { src: threejsLogo, name: 'Three.js' },
  { src: javaLogo, name: 'Java' },
  { src: gitLogo, name: 'Git' },
  { src: figmaLogo, name: 'Figma' },
  { src: vercelLogo, name: 'Vercel' },
  { src: mongooseLogo, name: 'Mongoose' },
  { src: postmanLogo, name: 'Postman' },
];


  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row items-center justify-evenly px-4 pt-24 pb-8 gap-8"
      style={{ backgroundImage: `url(${aboutbg})` }}
    >
      {/* Left: About & 3D Model */}
      <div className="animate-slide-in-left text-yellow-100 max-w-xl w-full p-4 bg-black bg-opacity-60 rounded-xl">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="mb-4">
          I am a passionate and motivated individual with a growing interest in web technologies and digital tools.
        </p>
        <p className="mb-4">
          My goal is to create useful and user-friendly web applications that make a difference.
        </p>
        <div className="mb-4">
          <ModelViewer
            modelPath="/models/painter_of_stars.glb"
            poster="/models/posters/painter_of_stars.webp"
            alt="3D model of a painter of stars with purple hair"
            scale={1.0}
            position={[0, -0.1, 0]}
            rotation={[0, 0, 0]}
          />
          <p className="text-sm mt-2 text-center italic text-gray-400">3D Model Visualization</p>
        </div>
      </div>

      {/* Right: Skills & Education */}
      <div className="animate-slide-in-right w-full max-w-xl bg-black bg-opacity-60 p-4 rounded-xl text-white">
        {/* Toggle buttons */}
        <div className="flex justify-start gap-4 mb-6 mt-4" role="group" aria-label="Show skills or courses">
          <button
            type="button"
            aria-pressed={!showEducation}
            onClick={() => setShowEducation(false)}
            className={`px-4 py-2 rounded-full font-semibold ${
              !showEducation ? 'bg-yellow-600 text-black' : 'bg-gray-700'
            }`}
          >
            Skills
          </button>
          <button
            type="button"
            aria-pressed={showEducation}
            onClick={() => setShowEducation(true)}
            className={`px-4 py-2 rounded-full font-semibold ${
              showEducation ? 'bg-yellow-600 text-black' : 'bg-gray-700'
            }`}
          >
            Courses
          </button>
        </div>

        {/* Conditional rendering */}
        {showEducation ? (
          <div className="text-start font-semibold space-y-2">
            <div className='hover:border hover:border-yellow-400 hover:rounded-xl p-2 transition duration-300 ease-in-out'>
            <p>🎓 Full Stack MERN Programme</p>
            <p className="text-sm text-yellow-100">
               Covered MongoDB, Express, React, Node.js; built full-stack web apps and RESTful APIs.
             </p>
            <p>📍 Jet Academy, 09.2024 - 05.2025</p>
            </div>
            <div className='hover:border hover:border-yellow-400 hover:rounded-xl p-2 transition duration-300 ease-in-out'>
             <p>🎓 Back-End Java Course</p>
             <p className="text-sm text-yellow-100">
              Learned object-oriented programming, JDBC, Spring Boot, and REST API development using Java.
             </p>
             <p>📍 TechnoEra Academy, 08.2025 - present</p>
            </div>
            <div className='hover:border hover:border-yellow-400 hover:rounded-xl p-2 transition duration-300 ease-in-out'>
             <p>🎓 Auto QA Java for Beginners Course</p>
             <p className="text-sm text-yellow-100">
              Test automation with Java: theory, hands-on practice and home tasks.</p>
             <p>📍 Andersen Trainee Program, 08.2025 - present</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 place-items-center">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center hover:border hover:border-yellow-400 hover:rounded-xl p-2 transition duration-300 ease-in-out"
              >
                <img src={tech.src} alt={`${tech.name} logo`} width="48" height="48" loading="lazy" className="w-12 h-12 mb-1 object-contain" />
                <span className="text-sm font-semibold text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
