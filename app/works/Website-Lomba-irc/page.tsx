'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WebsiteLombaIrcPage() {
  return (
    <section className="min-h-screen px-6 py-24 bg-black text-white flex flex-col items-center gap-12">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Website - Innovation - Robotic - Compettion
      </motion.h1>

      <Image
        src="/images/irc.png"
        alt="Smart Farming Project"
        width={800}
        height={500}
        className="rounded-lg shadow-xl object-cover max-w-full"
      />

       <Image
        src="/images/cdirc.png"
        alt="Smart Farming Project"
        width={800}
        height={500}
        className="rounded-lg shadow-xl object-cover max-w-full"
      />

      <p className="text-gray-300 max-w-3xl text-lg leading-relaxed text-center">
        Project ini menggunakan teknologi IoT untuk memonitor dan mengendalikan sistem pertanian secara otomatis, seperti kelembaban tanah, suhu, dan penyiraman tanaman.
      </p>
    </section>
  );
}
