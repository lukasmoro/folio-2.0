import React, { useRef, useState, useEffect } from 'react';

function LazyLoadImage({ src, alt, placeholder, className, onLoad, ...props }) {
  const imgRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
      if (onLoad) onLoad();
    };

    return () => {
      img.onload = null;
    };
  }, [src, onLoad]);

  return (
    <div className={`lazy-load-image-wrapper ${className || ''}`} ref={imgRef}>
      <img
        className={`lazy-image ${isLoaded ? 'visible' : ''}`}
        src={src}
        alt={alt}
        {...props}
      />
      {placeholder && !isLoaded && (
        <img
          className="lazy-image-placeholder"
          src={placeholder}
          alt={alt}
        />
      )}
      {!isLoaded && !placeholder && (
        <div style={{ minHeight: '300px', backgroundColor: '#f0f0f0' }} />
      )}
    </div>
  );
}

export default LazyLoadImage;