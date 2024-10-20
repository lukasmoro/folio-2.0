import React, { useRef, useState, useEffect } from 'react';

function LazyLoadImage({ src, alt, placeholder, ...props }) {
  const imgRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div ref={imgRef}>
      {isVisible ? (
        <img src={src} alt={alt} {...props} />
      ) : placeholder ? (
        <img src={placeholder} alt={alt} {...props} />
      ) : (
        <div style={{ minHeight: '200px', backgroundColor: '#f0f0f0' }} />
      )}
    </div>
  );
}

export default LazyLoadImage;
