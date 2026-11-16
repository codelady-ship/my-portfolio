import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';

const ModelCanvas = lazy(() => import('./ModelCanvas'));

const hasWebGL = () => {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch {
    return false;
  }
};

// Auto-load the 3D model only on larger screens with enough memory and no
// data-saver / reduced-motion preference. Everyone else gets a light WebP
// poster and can still tap "View in 3D".
const shouldAutoLoad = () => {
  if (typeof window === 'undefined') return false;
  const wide = window.matchMedia('(min-width: 768px)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = navigator.connection?.saveData === true;
  const lowMemory = (navigator.deviceMemory ?? 8) < 4;
  return wide && !reducedMotion && !saveData && !lowMemory;
};

const ModelViewer = ({ modelPath, poster, alt, scale, position, rotation, height = 300 }) => {
  const box = useRef(null);
  const [webgl] = useState(hasWebGL);
  const [wanted, setWanted] = useState(() => webgl && shouldAutoLoad());
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!wanted || inView || !box.current) return undefined;
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    io.observe(box.current);
    return () => io.disconnect();
  }, [wanted, inView]);

  const posterImg = (
    <img
      src={poster}
      alt={alt}
      width="480"
      height="300"
      loading="lazy"
      decoding="async"
      className="h-full w-full object-contain"
    />
  );

  return (
    <div ref={box} className="relative w-full" style={{ height }}>
      {wanted && inView ? (
        <Suspense fallback={posterImg}>
          <ModelCanvas
            modelPath={modelPath}
            scale={scale}
            position={position}
            rotation={rotation}
            fallback={posterImg}
          />
        </Suspense>
      ) : (
        <>
          {posterImg}
          {webgl && (
            <button
              type="button"
              onClick={() => {
                setWanted(true);
                setInView(true);
              }}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-1 text-sm text-yellow-100 ring-1 ring-yellow-500 hover:bg-black"
            >
              View in 3D
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ModelViewer;
