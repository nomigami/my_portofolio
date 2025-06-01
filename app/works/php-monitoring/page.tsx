'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PhpMonitoringPage() {
  return (
    <section className="min-h-screen px-6 py-24 bg-black text-white flex flex-col items-center gap-12">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Monitoring Website with PHP
      </motion.h1>

      <Image
        src="/images/php-monitoring.jpg"
        alt="PHP Monitoring"
        width={800}
        height={500}
        className="rounded-lg shadow-xl object-cover max-w-full"
      />

      <p className="text-gray-300 max-w-3xl text-lg leading-relaxed text-center">
        Website ini dibangun menggunakan PHP dan MySQL untuk menyimpan dan menampilkan data dari perangkat monitoring secara manual.
      </p>
    </section>
  );
}
