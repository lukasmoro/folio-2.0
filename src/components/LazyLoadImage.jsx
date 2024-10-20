import React, { useRef, useState, useEffect } from 'react';


function LazyLoadImage({ src, alt, placeholder, className, ...props }) {
  const imgRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(imgRef.current);
          }
        },
        {
          rootMargin: '200px',
        }
      );
      if (imgRef.current) {
        observer.observe(imgRef.current);
      }
    } else {
      setIsVisible(true);
    }

    return () => {
      if (observer && imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className={`lazy-load-image-wrapper ${className || ''}`}
      ref={imgRef}
    >
      {isVisible ? (
        <>
          <img
            className={`lazy-image ${isLoaded ? 'visible' : ''}`}
            src={src}
            alt={alt}
            onLoad={handleImageLoad}
            {...props}
          />
          {placeholder && (
            <img
              className={`lazy-image-placeholder ${
                isLoaded ? 'fade-out' : ''
              }`}
              src={placeholder}
              alt={alt}
            />
          )}
        </>
      ) : placeholder ? (
        <img
          className="lazy-image-placeholder"
          src={placeholder}
          alt={alt}
        />
      ) : (
        <div style={{ minHeight: '300px', backgroundColor: '#f0f0f0' }} />
      )}
    </div>
  );
}

export default LazyLoadImage;