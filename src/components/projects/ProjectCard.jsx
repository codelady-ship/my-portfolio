import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const linkClass =
  'hover:text-yellow-300 focus-visible:text-yellow-300 transition flex items-center gap-1 rounded px-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-400';

const ProjectCard = ({ title, description, tech, githubLink, backendLink, liveLink, image }) => {
  return (
    <article className="relative group w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-gray-900">
      <img
        src={image}
        alt={`Screenshot of ${title}`}
        width="448"
        height="224"
        loading="lazy"
        decoding="async"
        className="w-full h-56 object-cover transition-transform duration-300 md:group-hover:scale-110"
      />

      {/* Below md: details shown under the image. md+: overlay on hover/focus */}
      <div className="bg-gray-900 md:bg-black md:bg-opacity-75 md:absolute md:inset-0 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 sm:p-6 text-center text-yellow-100">
        <h2 className="text-lg sm:text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm mb-3 line-clamp-3">{description}</p>

        <ul className="flex flex-wrap justify-center gap-2 mb-3" aria-label="Tech stack">
          {tech.map((item) => (
            <li key={item} className="bg-yellow-500 text-black px-2 py-1 rounded text-xs">
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label={`${title} - live demo`}>
              <FaExternalLinkAlt className="text-lg" aria-hidden="true" />
              <span>Live demo</span>
            </a>
          )}
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label={`${title} - source code on GitHub`}>
            <FaGithub className="text-2xl" aria-hidden="true" />
            <span>{backendLink ? 'Frontend' : 'Code'}</span>
          </a>
          {backendLink && (
            <a href={backendLink} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label={`${title} - backend code on GitHub`}>
              <FaGithub className="text-2xl" aria-hidden="true" />
              <span>Backend</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
