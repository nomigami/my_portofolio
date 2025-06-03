'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProductnextjsPage() {
  return (
    <section className="min-h-screen px-6 py-24 bg-black text-white flex flex-col items-center gap-12">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Website Product with Next.js
      </motion.h1>

      <Image
        src="/images/ban-motor.png"
        alt="Nextjs product"
        width={800}
        height={500}
        className="rounded-lg shadow-xl object-cover max-w-full"
      />

      <p className="text-gray-300 max-w-3xl text-lg leading-relaxed text-center">
        Website ini dibangun menggunakan next.js dan supabase sebagai backendnya untuk menyimpan data dari contact
      </p>
    </section>
  );
}
