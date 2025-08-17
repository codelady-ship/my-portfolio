import ProjectCard from './ProjectCard';

import portfolioImg from '../../assets/myprojects/myportfolio.jpg';
import ecommerceImg from '../../assets/myprojects/ecommerce.jpg';
import quizAppImg from '../../assets/myprojects/quizApp.jpg';
import hellofreshImg from '../../assets/myprojects/hellofresh.jpg';
import actifyImg from '../../assets/myprojects/actify.jpg';
import fullstackHabitImg from '../../assets/myprojects/fulstackhabit.jpg';
import fitnesAppImg from '../../assets/myprojects/fitnessapp.jpg';

const projects = [
  {
    title: 'Fullstack My Portfolio Website (React + MongoDB)',
    description: 'A personal portfolio to showcase my projects and skills.',
    tech: ['React', 'Tailwind', 'Three.js', 'Node.js'],
    githubLink: 'https://github.com/codelady-ship/my-portfolio',
    backendLink: 'https://github.com/codelady-ship/backend-for-my-portfolio',
    image: portfolioImg,
  },
  {
    title: 'E-Commerce App',
    description: 'A MERN stack based online store with payment integration.',
    tech: ['React', 'Node.js', 'Express.js', 'Tailwind CSS'],
    githubLink: 'https://github.com/codelady-ship/Ecommerse-app',
    image: ecommerceImg,
  },
  {
  title: 'Fitness App',
  description: 'A modern fitness tracking application where users can monitor workouts, set goals, and stay motivated through a clean and responsive interface.',
  tech: ['Next.js', 'Node.js', 'Tailwind CSS'],
  githubLink: 'https://github.com/codelady-ship/My-Fitness-App',
  image: fitnesAppImg,
  },
  {
    title: 'Quiz App',
    description: 'An interactive quiz application to test your knowledge on various topics.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/codelady-ship/My-Quiz-App',
    image: quizAppImg,
  },
  {
    title: 'Hello Fresh Clone',
    description: 'A React-based clone of the HelloFresh landing page for practicing frontend skills.',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    githubLink: 'https://github.com/codelady-ship/hello-fresh-with-react',
    image: hellofreshImg,
  },
  {
    title: 'Actify - Habit Tracker',
    description: 'Actify is your daily companion for building strong habits and staying motivated through action-driven challenges.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/codelady-ship/basic-task-with-Html-Css-Js',
    image: actifyImg,
  },
  {
    title: 'Fullstack Habit Tracker (Next + MongoDB)',
    description: 'A full-featured habit tracker app using Next.js for the frontend and Node.js + MongoDB for the backend.',
    tech: ['Next.js', 'MongoDB', 'Node.js', 'Tailwind CSS'],
    githubLink: 'https://github.com/codelady-ship/task7-front-end-for-task6-',
    backendLink: 'https://github.com/codelady-ship/task6.mongodb',
    image: fullstackHabitImg,
  }
];

const Projects = () => {
  return (
    <section className="py-12 bg-black text-white" id="projects"> <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-yellow-100 mb-8 mt-12 text-center"> My Projects </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
