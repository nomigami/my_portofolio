"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FreelanceRobotikPage() {
  return (
    <section className="min-h-screen px-6 py-20 bg-black text-white flex flex-col items-center gap-10">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Freelance Pengajar Robotik - Sentral Robotik.id
      </motion.h1>

      {/* Foto terbaru dengan hover Instagram link */}
      <motion.div
        className="relative group w-full max-w-[600px] h-[380px] rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/images/logosr.jpg"
          alt="Instagram Profile"
          fill
          className="object-cover"
        />

        {/* Overlay muncul saat hover */}
        <a
          href="https://instagram.com/sentral_robotik"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500"
        >
          <span className="text-white text-lg font-semibold">
            📷 Lihat Instagram
          </span>
        </a>
      </motion.div>

      {/* Gambar lama */}
      <Image
        src="/images/bareng.jpg"
        alt="Freelance Pengajar Robotik"
        width={600}
        height={380}
        className="rounded-lg shadow-xl object-cover w-full max-w-[600px] h-[500px]"
      />

      {/* Video */}
      
      <div className="w-full max-w-[600px] aspect-[9/16]">
      <video
      src="/videos/1.mp4"
      controls
      className="rounded-lg shadow-xl w-full h-auto object-cover"
      />
      </div>


      {/* Deskripsi */}
      <p className="text-gray-300 max-w-2xl text-lg leading-relaxed text-center">
        Saya bekerja sebagai{" "}
        <span className="font-semibold text-white">
          freelance pengajar robotik
        </span>{" "}
        di
        <span className="text-cyan-400"> Sentral Robotik.id</span>, mengajar
        siswa dalam memahami dasar-dasar elektronika, pemrograman
        mikrokontroler, dan pembuatan proyek berbasis robotik. Kegiatan ini
        membantu siswa mengasah kreativitas, logika, serta keterampilan praktis
        di bidang teknologi.
      </p>
    </section>
  );
}
