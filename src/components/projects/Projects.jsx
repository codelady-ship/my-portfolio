import ProjectCard from './ProjectCard';
import usePageMeta from '../../hooks/usePageMeta';

import portfolioImg from '../../assets/myprojects/myportfolio.jpg';
import ecommerceImg from '../../assets/myprojects/ecommerce.jpg';
import quizAppImg from '../../assets/myprojects/quizApp.jpg';
import hellofreshImg from '../../assets/myprojects/hellofresh.jpg';
import actifyImg from '../../assets/myprojects/actify.jpg';
import fullstackHabitImg from '../../assets/myprojects/fulstackhabit.jpg';
import fitnesAppImg from '../../assets/myprojects/fitnessapp.jpg';

// liveLink values come from each repo's GitHub "homepage" field
// (gh repo view codelady-ship/<repo> --json homepageUrl).
const projects = [
  {
    title: '3D Portfolio v1 (this site)',
    description: 'My first portfolio: React, Tailwind CSS and Three.js with interactive 3D models. Contact form uses mailto, with an optional Node.js API.',
    tech: ['React', 'Tailwind CSS', 'Three.js', 'Vite'],
    liveLink: 'https://my-portfolio-eta-mocha-32.vercel.app',
    githubLink: 'https://github.com/codelady-ship/my-portfolio',
    backendLink: 'https://github.com/codelady-ship/backend-for-my-portfolio',
    image: portfolioImg,
  },
  {
    title: 'Our Boutique - E-Commerce App',
    description: 'React e-commerce demo with category filter, search, product pages and a persistent Zustand cart.',
    tech: ['React', 'Zustand', 'Tailwind CSS'],
    liveLink: 'https://codelady-ship.github.io/Ecommerse-app/',
    githubLink: 'https://github.com/codelady-ship/Ecommerse-app',
    image: ecommerceImg,
  },
  {
    title: 'Fitness App',
    description: 'Fitness dashboard where users can track workouts and activity, with charts and a clean, responsive interface.',
    tech: ['Next.js', 'Chart.js', 'Zustand', 'Tailwind CSS'],
    liveLink: 'https://my-fitness-app-tau-drab.vercel.app/dashbroad',
    githubLink: 'https://github.com/codelady-ship/My-Fitness-App',
    image: fitnesAppImg,
  },
  {
    title: 'Quiz App',
    description: 'Bilingual (AZ/EN) web-development quiz about HTML, CSS, JavaScript and React.',
    tech: ['React', 'Vite', 'CSS'],
    liveLink: 'https://codelady-ship.github.io/My-Quiz-App/',
    githubLink: 'https://github.com/codelady-ship/My-Quiz-App',
    image: quizAppImg,
  },
  {
    title: 'HelloFresh Clone (practice)',
    description: 'Multi-page HelloFresh practice clone built to learn React Router and Tailwind CSS. Learning project, not affiliated with HelloFresh.',
    tech: ['React', 'React Router', 'Tailwind CSS'],
    liveLink: 'https://codelady-ship.github.io/hello-fresh-with-react/',
    githubLink: 'https://github.com/codelady-ship/hello-fresh-with-react',
    image: hellofreshImg,
  },
  {
    title: 'Actify - Habit Tracker',
    description: 'Daily habit tracker with streaks, built with vanilla HTML, CSS and JavaScript and saved in localStorage.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://codelady-ship.github.io/basic-task-with-Html-Css-Js/',
    githubLink: 'https://github.com/codelady-ship/basic-task-with-Html-Css-Js',
    image: actifyImg,
  },
  {
    title: 'Fullstack Habit Tracker (Next.js + MongoDB)',
    description: 'Habit tracker with a Next.js frontend and an Express + MongoDB REST API backend.',
    tech: ['Next.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    liveLink: 'https://task7-front-end-for-task6.vercel.app',
    githubLink: 'https://github.com/codelady-ship/task7-front-end-for-task6-',
    backendLink: 'https://github.com/codelady-ship/task6.mongodb',
    image: fullstackHabitImg,
  },
];

const Projects = () => {
  usePageMeta({
    title: 'Projects',
    description: 'Projects by Antiqa Jalilova: e-commerce, fitness dashboard, quiz app, habit trackers and more, with live demos and source code.',
    path: '/projects',
  });

  return (
    <section className="pt-28 pb-12 bg-black text-white" id="projects">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-yellow-100 mb-8 text-center">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.githubLink} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
