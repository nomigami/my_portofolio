'use client';

import { motion } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4 overflow-hidden">

        {/* 🔹 Hanya background hitam polos */}
        <div className="absolute inset-0 bg-black"></div>

        {/* 🔹 Konten utama */}
        <div className="relative z-10">
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-2 fade-in-up"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          </motion.p>

          {/* 🔹 Efek gambar bergerak hanya di dalam teks */}
          <h1
            className="font-extrabold uppercase leading-none text-transparent bg-clip-text animate-bg-slide fade-in-up"
            style={{
              fontSize: 'clamp(3rem, 18vw, 8rem)',
              backgroundSize: '300% 300%',
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
            }}
          >
            PORTOFOLIO
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl text-gray-300 fade-in-up">
            <span className="line-through">Trade</span> to{' '}
            <span className="italic">Traveler</span> to{' '}
            <span className="line-through">Designer</span> to{' '}
            <span className="font-semibold">Student</span>: Go Through Various Problems And Solve Them
          </p>
        </div>
      </section>
    </>
  );
}
