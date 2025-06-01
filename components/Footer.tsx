'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CustomFooter() {
  return (
    <motion.footer
      className="bg-black text-white py-12 px-6 flex flex-col items-center justify-center space-y-6 border-t border-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Navigasi & Logo */}
      <div className="flex justify-between items-center w-full max-w-5xl text-sm sm:text-base font-semibold">
        <div className="flex gap-8">
          <Link href="/" className="hover:text-gray-400 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-400 transition">About</Link>
        </div>

        <div className="text-2xl font-extrabold tracking-wider">
          <span className="border-b-2 border-white">YOGA</span>SAPUTRA
        </div>

        <div className="flex gap-8">
          <Link href="/works" className="hover:text-gray-400 transition">Works</Link>
          <Link href="/contact" className="hover:text-gray-400 transition">Contact</Link>
        </div>
      </div>

      {/* Media Sosial dengan Foto Bulat */}
      <div className="flex gap-6">
        <a
          href="https://instagram.com/yogas_pt"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border border-white overflow-hidden hover:scale-105 transition-transform duration-300"
        >
          <img
            src="/images/instagram.jpg"
            alt="Instagram"
            className="object-cover w-full h-full"
          />
        </a>
        <a
          href="https://tiktok.com/@ppppssss295"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border border-white overflow-hidden hover:scale-105 transition-transform duration-300"
        >
          <img
            src="/images/tiktok.jpg"
            alt="TikTok"
            className="object-cover w-full h-full"
          />
        </a>
      </div>

      {/* Garis Pembatas */}
      <div className="w-full border-t border-gray-700" />

      {/* Copyright */}
      <p className="text-center text-gray-400 text-sm">
        Copyright © 2025 All Rights Reserved. Powered By <span className="text-white font-medium">Yoga Saputra</span>
      </p>
    </motion.footer>
  );
}
