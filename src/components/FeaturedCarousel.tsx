import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";
import slideImage1 from "figma:asset/456b2e2df81f50632ef7d4844cc7ae6fac7e668b.png";
import slideImage2 from "figma:asset/c2be663fb74f8b3020ae1957267fb5f9a4a17ce4.png";
import slideImage3 from "figma:asset/6739fdcc3329aaefd50c6acb1bda6293a7cf1762.png";
import slideImage4 from "figma:asset/add96bdf321c19be23fd75843e691172c6e62e60.png";

interface Slide {
  id: number;
  image: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: slideImage1,
    headline: "Facility Construction and Maintenance",
    description: "Complete mechanical and piping solutions for operating facilities across Western Canada.",
    ctaText: "View Services",
    ctaLink: "#services"
  },
  {
    id: 2,
    image: slideImage2,
    headline: "Custom Fabrication, Supports, and CNC Plasma Table",
    description: "Precision fabrication services with advanced CNC plasma cutting capabilities.",
    ctaText: "View Gallery",
    ctaLink: "/gallery"
  },
  {
    id: 3,
    image: slideImage3,
    headline: "3D Scanning and Modeling",
    description: "Advanced laser scanning and Plant 3D modeling for a seamless process from design and fabrication to field installation.",
    ctaText: "Learn More",
    ctaLink: "/services"
  },
  {
    id: 4,
    image: slideImage4,
    headline: "Modular Design, Fabrication, and Installation",
    description: "Engineered skid packages and modular systems built for efficient installation and operation.",
    ctaText: "Request a Quote",
    ctaLink: "#contact"
  }
];

export function FeaturedCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Mouse/Touch drag handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setTranslateX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Threshold for slide change (20% of container width)
    const threshold = containerRef.current ? containerRef.current.offsetWidth * 0.2 : 100;
    
    if (translateX > threshold) {
      prevSlide();
    } else if (translateX < -threshold) {
      nextSlide();
    }
    
    setTranslateX(0);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Auto-play (optional - can be removed if not wanted)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, [isDragging, currentSlide]);

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-[#35393C]">
      {/* Slides Container */}
      <div
        ref={containerRef}
        className="relative w-full h-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => {
          const offset = index - currentSlide;
          const dragOffset = isDragging ? translateX : 0;
          
          return (
            <div
              key={slide.id}
              className="absolute inset-0 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(${offset * 100}% + ${dragOffset}px))`,
                pointerEvents: index === currentSlide ? 'auto' : 'none'
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={slide.image}
                  alt={slide.headline}
                  className="w-full h-full object-cover"
                  style={slide.id === 2 ? { objectPosition: 'center 30%' } : undefined}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full">
                  <div className="max-w-2xl">
                    <h2 className="text-[#F3F3F3] mb-6 font-['Montserrat'] text-4xl md:text-5xl lg:text-6xl" style={{ WebkitTextStroke: '1.5px #B6281A', paintOrder: 'stroke fill', letterSpacing: '0.02em' }}>
                      {slide.headline}
                    </h2>
                    <p className="text-[#B0B0B0] mb-8 font-['Inter'] text-lg md:text-xl leading-relaxed">
                      {slide.description}
                    </p>
                    <Link
                      to={slide.ctaLink}
                      className="inline-block px-8 py-4 bg-[#B6281A] text-[#F3F3F3] rounded-lg hover:bg-[#E04E2C] transition-colors duration-300 font-['Montserrat']"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle hash links for smooth scrolling
                        if (slide.ctaLink.startsWith('#')) {
                          e.preventDefault();
                          const element = document.querySelector(slide.ctaLink);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }
                      }}
                    >
                      {slide.ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-[#424850]/90 hover:bg-[#B6281A] text-[#F3F3F3] rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-[#555B63] hover:border-[#B6281A]"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-[#424850]/90 hover:bg-[#B6281A] text-[#F3F3F3] rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-[#555B63] hover:border-[#B6281A]"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(index);
            }}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-10 h-2 bg-[#B6281A]'
                : 'w-2 h-2 bg-[#F3F3F3]/50 hover:bg-[#F3F3F3]'
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}