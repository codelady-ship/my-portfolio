import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';

// Route-level code splitting: the 3D pages (three.js) load only when visited.
const About = lazy(() => import('./components/About.jsx'));
const Projects = lazy(() => import('./components/projects/Projects.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const NotFound = lazy(() => import('./components/NotFound.jsx'));

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center text-yellow-100" role="status">
    Loading…
  </div>
);

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl overflow-x-clip">
      <Navbar />

      <main>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default App;
