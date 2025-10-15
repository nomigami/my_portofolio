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
          
        </motion.p>

        {/* Untuk layar besar - satu baris */}
        <h1
          className="hidden sm:block font-extrabold uppercase leading-none bg-clip-text text-transparent animate-bg-slide"
          style={{
            fontSize: 'clamp(3rem, 18vw, 8rem)',
          }}
        >
          Portofolio
        </h1>

        {/* Untuk layar kecil - dua baris */}
        <div className="block sm:hidden leading-none text-transparent bg-clip-text animate-bg-slide font-extrabold uppercase text-[20vw]">
          <div>Porto</div>
          <div>folio</div>
        </div>

        <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl text-gray-300">
          <span className="line-through">Trade</span> to{' '}
          <span className="italic">Traveler</span> to{' '}
          <span className="line-through">Designer</span> to{' '}
          <span className="font-semibold">Student</span>: Go Through Various Problems And Solve Them
        </p>
      </section>
    </>
  );
}
