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

      <p className="text-gray-300 max-w-3xl text-lg leading-relaxed text-center gap-8 py-1">
        Project ini berfungsi sebagai profil lomba dan sarana pendaftaran peserta. Website ini dibangun menggunakan Next.js dengan framework React, dan terdiri dari dua bagian utama: 
      </p>
      <p className="text-gray-300 max-w-3xl text-lg leading-relaxed text-center gap-8 py-1">
        1. Website Umum, yang dapat diakses oleh semua orang untuk melihat informasi lomba dan melakukan pendaftaran.

        2. Website Admin, yang hanya dapat diakses oleh panitia. Bagian ini digunakan untuk mengelola data peserta yang telah mendaftar serta melakukan proses absensi saat registrasi.
      </p>
      <p className="text-gray-300 max-w-3xl text-lg leading-relaxed text-center gap-8 py-1">
       Website ini terhubung dengan database Supabase. Pemilihan Supabase dilakukan karena mampu mengelola data dengan rapi, terstruktur, serta memiliki fitur filtering data yang efisien. Selain itu, keamanan Supabase dinilai lebih baik dibandingkan dengan Firebase, sehingga cocok digunakan untuk sistem pendaftaran dan pengelolaan data peserta lomba.
       </p>
    </section>
  );
}
