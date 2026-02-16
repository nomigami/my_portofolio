'use client';

import { motion } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4 overflow-hidden">
        {/* Tulisan Welcome */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to My
        </motion.p>

        {/* Untuk layar besar - satu baris */}
        <motion.h1
          className="hidden sm:block font-extrabold uppercase leading-none 
                     bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
                     bg-clip-text text-transparent animate-gradient"
          style={{
            fontSize: 'clamp(5rem, 18vw, 10rem)',
            backgroundSize: '200% 200%',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Portofolio
        </motion.h1>

        {/* Untuk layar kecil - dua baris */}
        <motion.div 
          className="block sm:hidden leading-none font-extrabold uppercase text-[20vw]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
                       bg-clip-text text-transparent animate-gradient"
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Porto
          </div>
          <div
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
                       bg-clip-text text-transparent animate-gradient"
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            folio
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p 
          className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="line-through text-gray-500">Trade</span> to{' '}
          <span className="italic text-blue-400">Traveler</span> to{' '}
          <span className="line-through text-gray-500">Designer</span> to{' '}
          <span className="font-semibold text-purple-400">Student</span>: Go Through Various Problems And Solve Them
        </motion.p>

        {/* Optional: Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>
    </>
  );
}