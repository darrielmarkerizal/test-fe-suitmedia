"use client";

import { useState, useEffect, useRef } from "react";

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: string;
}

const HeroBanner = ({
  title = "Ideas",
  subtitle = "Where all our great things begin",
  backgroundImage = "https://picsum.photos/1920/1080?random=1",
  height = "100vh",
}: HeroBannerProps) => {
  const [scrollY, setScrollY] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const rect = bannerRef.current.getBoundingClientRect();
        const scrolled = window.scrollY;

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
      className="relative overflow-hidden z-10"
      style={{ height }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translate3d(0, ${scrollY * 0.5}px, 0)`,
          height: "120%",
          top: "-10%",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div
        className="relative z-20 flex items-center justify-center h-full will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * 0.2}px, 0)`,
        }}
      >
        <div className="text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg animate-fade-in-up">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md animate-fade-in-up-delay">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30">
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

export default HeroBanner;
