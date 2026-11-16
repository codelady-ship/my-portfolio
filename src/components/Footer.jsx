const Footer = () => (
  <footer className="border-t border-yellow-900/40 bg-black px-4 py-6 text-center text-sm text-gray-400">
    <p>© {new Date().getFullYear()} Antiqa Jalilova. Built with React, Vite, Tailwind CSS and Three.js.</p>
    <p className="mt-1">
      This is my first portfolio. See my newer one at{' '}
      <a
        href="https://antiqa-portfolio.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-400 underline-offset-4 hover:underline"
      >
        antiqa-portfolio.vercel.app
      </a>
      .
    </p>
  </footer>
);

export default Footer;
