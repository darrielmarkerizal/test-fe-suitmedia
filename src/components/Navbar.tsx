"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navigationItems = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Ideas", href: "/ideas" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (!pathname) return false; // Add null check
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] px-6 py-4 transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        lastScrollY > 50
          ? "bg-orange-500/90 backdrop-blur-md shadow-lg"
          : "bg-orange-500"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/suitmed-logo.png"
              alt="Suitmed Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-white hover:text-orange-100 transition-colors duration-200 font-medium ${
                isActive(item.href) ? "border-b-2 border-white pb-1" : ""
              }`}
            >
              {item.name}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300"></span>
              )}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button className="text-white hover:text-orange-100 focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
