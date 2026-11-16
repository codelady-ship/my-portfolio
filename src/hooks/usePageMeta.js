import { useEffect } from 'react';

export const SITE_URL = 'https://my-portfolio-eta-mocha-32.vercel.app';

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

// Per-route <title>, description, canonical and og:url for this SPA.
const usePageMeta = ({ title, description, path = '/' }) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | Antiqa Jalilova` : 'Antiqa Jalilova | Full Stack Developer Portfolio';
    const url = `${SITE_URL}${path}`;
    document.title = fullTitle;
    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
      setMeta('meta[name="twitter:description"]', 'content', description);
    }
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[name="twitter:title"]', 'content', fullTitle);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('link[rel="canonical"]', 'href', url);
  }, [title, description, path]);
};

export default usePageMeta;
