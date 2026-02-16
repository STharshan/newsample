import React, { useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { NavbarLogo } from "../global";

const Navbar = ({ logo = NavbarLogo.logo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT US", href: "#about" },
    { name: "OUR SERVICES", href: "#services" },
    { name: "PRICING", href: "#pricing" },
    { name: "TESTIMONIALS", href: "#testimonials" },
    { name: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveLink(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-8xl px-8 mx-auto">
        <div className="flex items-center justify-between h-24">

          {/* Logo from prop */}
          <img
            src={logo}
            alt="Logo"
            className="h-15 object-contain"
          />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className="relative text-white font-semibold tracking-widest group"
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-2 h-1 bg-white transition-all duration-300
                    ${activeLink === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="#quote"
              className="bg-primary text-white px-6 py-3 text-sm font-bold tracking-widest rounded"
            >
              GET A QUOTE
            </a>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 px-6 py-6 space-y-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActiveLink(link.href);
                setIsMenuOpen(false);
              }}
              className="block text-white font-bold tracking-widest border-b border-white/10 pb-2"
            >
              {link.name}
            </a>
          ))}

          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
