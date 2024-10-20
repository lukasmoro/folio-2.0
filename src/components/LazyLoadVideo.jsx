import React, { useRef, useState, useEffect } from 'react';

function LazyLoadVideo({ src, placeholder, alt, ...props }) {
  const videoRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '200px',
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div ref={videoRef}>
      {isVisible ? (
        <video src={src} {...props}>
          {props.children}
        </video>
      ) : (
        <img src={placeholder} alt={alt} />
      )}
    </div>
  );
}

export default LazyLoadVideo;
