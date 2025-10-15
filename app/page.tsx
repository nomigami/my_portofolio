'use client';

import { motion } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4 overflow-hidden relative">
        
        {/* Efek latar belakang aesthetic */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.05),_transparent_40%)]" />

        {/* Tulisan Welcome */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-2 z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to My Portfolio
        </motion.p>

        {/* Untuk layar besar - satu baris */}
        <motion.h1
          className="hidden sm:block font-extrabold uppercase leading-none bg-clip-text text-transparent z-10"
          style={{
            backgroundImage: "url('/portofolio.png')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            fontSize: 'clamp(3rem, 18vw, 8rem)',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Portofolio
        </motion.h1>

        {/* Untuk layar kecil - dua baris */}
        <motion.div
          className="block sm:hidden leading-none text-transparent bg-clip-text font-extrabold uppercase text-[20vw] z-10"
          style={{
            backgroundImage: "url('/portofolio.png')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div>Porto</div>
          <div>folio</div>
        </motion.div>

        {/* Deskripsi bawah */}
        <motion.p
          className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl text-gray-300 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="line-through">Trade</span> to{' '}
          <span className="italic">Traveler</span> to{' '}
          <span className="line-through">Designer</span> to{' '}
          <span className="font-semibold">Student</span>: Go Through Various Problems And Solve Them
        </motion.p>

        {/* Sedikit efek glow di bawah teks */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </section>
    </>
  );
}
