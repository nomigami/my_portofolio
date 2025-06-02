'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function NextjsMonitoringPage() {
  return (
    <section className="min-h-screen px-6 py-24 bg-black text-white flex flex-col items-center gap-12">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Monitoring Website with Next.js
      </motion.h1>

      <Image
        src="/images/monitoringjs.png"
        alt="Next.js Monitoring"
        width={800}
        height={500}
        className="rounded-lg shadow-xl object-cover max-w-full"
      />

      <p className="text-gray-300 max-w-3xl text-lg leading-relaxed text-center">
        Aplikasi ini dibangun dengan Next.js dan memanfaatkan API untuk menampilkan data monitoring sensor secara real-time.
      </p>
    </section>
  );
}
