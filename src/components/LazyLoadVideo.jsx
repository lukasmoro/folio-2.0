import React, { useRef, useState, useEffect } from 'react';

function LazyLoadVideo({ src, placeholder, alt, className, ...props }) {
  const videoRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const currentRef = videoRef.current; // Store the ref value
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      {
        rootMargin: '200px',
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className={`lazy-load-video-wrapper ${className || ''}`}
      ref={videoRef}
    >
      {isVisible ? (
        <>
          <video
            className={`lazy-video ${isLoaded ? 'visible' : ''}`}
            onCanPlayThrough={handleVideoLoad}
            src={src}
            {...props}
          />
          {placeholder && (
            <img
              className={`lazy-video-placeholder ${
                isLoaded ? 'fade-out' : ''
              }`}
              src={placeholder}
              alt={alt}
            />
          )}
        </>
      ) : placeholder ? (
        <img
          className="lazy-video-placeholder"
          src={placeholder}
          alt={alt}
        />
      ) : (
        <div style={{ minHeight: '300px', backgroundColor: '#f0f0f0' }} />
      )}
    </div>
  );
}

export default LazyLoadVideo;