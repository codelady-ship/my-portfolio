import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';

const NotFound = () => {
  usePageMeta({ title: 'Page not found', description: 'This page does not exist.', path: '/' });
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 pt-24 text-center text-yellow-100">
      <h1 className="text-4xl font-bold">404 - Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="rounded-full bg-yellow-600 px-6 py-2 font-semibold text-white hover:bg-yellow-800">
        Back to home
      </Link>
    </section>
  );
};

export default NotFound;
