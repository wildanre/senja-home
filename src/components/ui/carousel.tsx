"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

interface SlideData {
  title: string;
  description: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, description, title } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[90vmin] h-[55vmin] mx-[3vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-lg border border-white/20 dark:border-gray-700/30 overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <div className="grid md:grid-cols-2 gap-6 h-full p-6">
            {/* Content Section */}
            <div className="flex flex-col justify-center text-left space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-[#e8f0f7]">
                {title}
              </h3>
              <div 
                className="text-sm md:text-base text-white/90 dark:text-[#d0dce6] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
            
            {/* Image Section */}
            <div className="flex items-center justify-center h-full">
              <img
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg opacity-80"
                style={{
                  opacity: current === index ? 1 : 0.7,
                }}
                alt={title}
                src={src}
                onLoad={imageLoaded}
                loading="eager"
                decoding="sync"
              />
            </div>
          </div>
          
          {current === index && (
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20 dark:to-transparent transition-all duration-1000 pointer-events-none" />
          )}
        </div>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
  disabled?: boolean;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
  disabled = false,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-12 h-12 flex items-center mx-4 justify-center backdrop-blur-sm border-2 rounded-full focus:outline-none transition-all duration-200 shadow-lg ${
        type === "previous" ? "rotate-180" : ""
      } ${
        disabled 
          ? "bg-gray-400/50 border-gray-500/30 cursor-not-allowed opacity-50" 
          : "bg-senja-brown/80 dark:bg-gray-800/80 border-senja-orange/60 dark:border-blue-400/60 active:translate-y-0.5 hover:border-senja-orange dark:hover:border-blue-400 cursor-pointer"
      }`}
      title={title}
      onClick={handleClick}
      disabled={disabled}
    >
      <IconArrowNarrowRight className={`w-6 h-6 ${disabled ? "text-gray-500" : "text-white dark:text-[#e8f0f7]"}`} />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-[90vmin] h-[55vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-3vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full bottom-[-4rem] z-20">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
          disabled={current === 0}
        />

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
          disabled={current === slides.length - 1}
        />
      </div>
    </div>
  );
}