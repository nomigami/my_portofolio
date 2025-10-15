'use client';

import { motion } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden animate-bg-slide">
        {/* Background hitam transparan agar teks tetap terbaca */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Efek kabut (fog layer) */}
        {/* Efek kabut CSS (tanpa gambar) */}
<div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/30 to-white/10 blur-3xl opacity-30 animate-fogMove"></div>
</div>


        {/* Konten utama */}
        <div className="relative z-10">
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          ></motion.p>

          {/* Teks besar untuk layar besar */}
          <h1
            className="hidden sm:block font-extrabold uppercase leading-none text-black relative"
            style={{
              fontSize: 'clamp(3rem, 18vw, 8rem)',
            }}
          >
            Portofolio
          </h1>

          {/* Teks besar untuk layar kecil */}
          <div className="block sm:hidden font-extrabold uppercase leading-none text-black text-[20vw] relative">
            <div>Porto</div>
            <div>folio</div>
          </div>

          <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl text-white">
            <span className="line-through">Trade</span> to{' '}
            <span className="italic">Traveler</span> to{' '}
            <span className="line-through">Designer</span> to{' '}
            <span className="font-semibold">Student</span>: Go Through Various Problems And Solve Them
          </p>
        </div>
      </section>

      {/* Tambahkan animasi kabut di sini */}
      <style jsx global>{`
        @keyframes fogMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-fogMove {
          animation: fogMove 60s linear infinite;
        }
      `}</style>
    </>
  );
}
