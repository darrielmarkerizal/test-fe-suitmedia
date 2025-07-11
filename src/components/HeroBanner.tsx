"use client";

import { useState, useEffect, useRef } from "react";

interface HeroBannerAdvancedProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: string;
  diagonalDirection?: "left" | "right" | "both";
  diagonalHeight?: number;
  parallaxSpeed?: number;
}

const HeroBannerAdvanced = ({
  title = "Ideas",
  subtitle = "Where all our great things begin",
  backgroundImage = "https://picsum.photos/1920/1080?random=1",
  height = "100vh",
}: HeroBannerAdvancedProps) => {
  const [scrollY, setScrollY] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const rect = bannerRef.current.getBoundingClientRect();
        const scrolled = window.scrollY;

        // Only apply parallax when banner is visible
        if (rect.bottom >= 0) {
          setScrollY(scrolled);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={bannerRef}
      className="relative overflow-hidden"
      style={{ height }}
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${scrollY * 0.5}px)`,
          height: "120%", // Make image taller for parallax effect
          top: "-10%",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content with Parallax */}
      <div
        className="relative z-10 flex items-center justify-center h-full"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Diagonal Cut at Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path d="M0,120 L1200,120 L1200,0 L0,60 Z" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default HeroBannerAdvanced;
