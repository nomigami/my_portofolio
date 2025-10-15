"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-lg shadow-lg"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-widest bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"
        >
          Yoga Saputra
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-300">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/works">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden bg-gradient-to-b from-black/90 to-gray-900 border-t border-gray-700 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center py-5 space-y-5 text-gray-300">
              <NavLink href="/" onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
              <NavLink href="/about" onClick={() => setIsOpen(false)}>
                About
              </NavLink>
              <NavLink href="/works" onClick={() => setIsOpen(false)}>
                Projects
              </NavLink>
              <NavLink href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative group transition text-lg"
    >
      <span className="group-hover:text-white">{children}</span>
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-gray-400 to-white group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
}
