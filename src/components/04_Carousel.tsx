// Carousel.tsx
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface Image {
  src: string;
  alt: string;
  summary: string;
}

interface CarouselProps {
  images: Image[];
  autoPlay?: boolean;
  interval?: number;
  transitionDuration?: number;
  theme?: {
    backgroundColor?: string;
    textColor?: string;
  };
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlay = false,
  interval = 3000,
  transitionDuration = 0.5,
  theme = { backgroundColor: "#000", textColor: "#fff" },
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isInteracting, setIsInteracting] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") handlePrev();
    if (event.key === "ArrowRight") handleNext();
  };

  useEffect(() => {
    if (autoPlay && !isInteracting) {
      const timer = setInterval(handleNext, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, handleNext, isInteracting]);

  return (
    <div
      className="carousel"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
      role="region"
      aria-live="polite"
      aria-label="Image carousel"
    >
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: transitionDuration }}
        >
          <Zoom zoomMargin={40}>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              style={{ width: "100%", height: "auto", cursor: "grab" }}
              loading="lazy"
            />
          </Zoom>
        </motion.div>
      </AnimatePresence>

      <div className="summary" aria-live="polite">
        {images[currentIndex].summary}
      </div>

      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: "50px",
              height: "50px",
              opacity: index === currentIndex ? 1 : 0.5,
              cursor: "pointer",
            }}
            loading="lazy"
          />
        ))}
      </div>

      <div className="indicators">
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: index === currentIndex ? "#fff" : "#ccc",
              borderRadius: "50%",
              margin: "0 5px",
              cursor: "pointer",
            }}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button onClick={handlePrev} aria-label="Previous slide">
        ←
      </button>
      <button onClick={handleNext} aria-label="Next slide">
        →
      </button>
    </div>
  );
};

export default Carousel;
