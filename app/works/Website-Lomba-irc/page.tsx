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

      <p className="text-gray-300 max-w-1xl text-lg leading-relaxed text-center gap-8 py-0">
        Project ini berfungsi sebagai profile lomba dan sebagai sarana pendaftaran, website ini dibangun dengan menggunakan Next.js dengan framework React yang terdiri dari website umum yang dimana website tersebut bisa diakses oleh semua orang, 
      </p>
      <p className="text-gray-300 max-w-1xl text-lg leading-relaxed text-center gap-8 py-0">
        Lalu juga ada website yang hanya bisa diakses oleh panitia atau website admin yang dimana website tersebut digunakan untuk mengolah data peserta yang sudah terdaftar serta bisa digunakan untuk menabsen peserta saat registrasi.
      </p>
      <p className="text-gray-300 max-w-1xl text-lg leading-relaxed text-center gap-8 py-0">
       website ini diredirect dengan database supabase, karena supabase jika digunakan untuk data yang diharuskan rapi dan terstruktur serta diwebsite ada fitur filtering data maka supabase sangat cocok digunakan dengan sistem keamanan yang lebih baik dibandingkan dengan firebase.
       </p>
    </section>
  );
}
