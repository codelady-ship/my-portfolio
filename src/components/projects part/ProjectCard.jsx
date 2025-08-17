import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, tech, githubLink, backendLink, image }) => {
  return (
    <div className="relative group w-full max-w-md rounded-lg overflow-hidden shadow-lg cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center text-yellow-100">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-yellow-500 text-black px-2 py-1 rounded text-xs"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-6 mt-2">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition flex items-center gap-1"
            title="Frontend Repository"
          >
            <FaGithub className="text-2xl" />
            <span className="hidden sm:inline">Frontend</span>
          </a>

          {backendLink && (
  <a
    href={backendLink}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-300 transition flex items-center gap-1"
    title="Backend Repository"
  >
    <FaGithub className="text-2xl" />
    <span className="hidden sm:inline">Backend</span>
  </a>
)}

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
