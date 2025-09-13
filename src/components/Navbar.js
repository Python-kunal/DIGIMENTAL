import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, XIcon, SunIcon, MoonIcon } from "@heroicons/react/outline";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Initialize theme from localStorage or prefers-color-scheme
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
    else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");
  }, []);

  // Apply theme class to document
  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Navbar background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [location]);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all ${scrolled ? "backdrop-blur bg-white/70 dark:bg-gray-900/60 shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-green-400 flex items-center justify-center shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 2C8 2 4 4 4 8c0 4 4 6 8 12 4-6 8-8 8-12 0-4-4-6-8-6z" fill="white" />
              </svg>
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">DigiMental</div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="relative text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition px-1 py-1"
                  >
                    <span className="z-10">{link.name}</span>
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all ${
                        location.pathname === link.to ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme toggle */}
            <button
              onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
              aria-label="Toggle theme"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {theme === "light" ? <MoonIcon className="w-5 h-5 text-gray-700" /> : <SunIcon className="w-5 h-5 text-yellow-400" />}
            </button>

            {/* Auth buttons */}
            <div className="flex items-center gap-3">
              <Link to="/login" className="px-4 py-2 rounded-md text-sm font-medium border border-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                Sign in
              </Link>
              <Link to="/signup" className="px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-green-500 to-teal-400 text-white shadow hover:opacity-95 transition">
                Get Started
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Open menu"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {open ? <XIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" /> : <MenuIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-in menu (framer-motion) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-800 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block px-4 py-3 rounded-md text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="flex items-center justify-between mt-2">
                  <button
                    onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    {theme === "light" ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5 text-yellow-400" />}
                    <span>{theme === "light" ? "Dark mode" : "Light mode"}</span>
                  </button>

                  <div className="flex gap-2">
                    <Link to="/login" className="px-4 py-2 rounded-md text-sm border hover:bg-gray-100 dark:hover:bg-gray-800 transition">Sign in</Link>
                    <Link to="/signup" className="px-4 py-2 rounded-md text-sm bg-gradient-to-r from-green-500 to-teal-400 text-white">Get Started</Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
