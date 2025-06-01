'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-24 flex flex-col gap-24">
      
      {/* Bagian Atas - Foto dan Informasi */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-16">
        {/* Foto Utama */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/yoga4.jpg"
            alt="About Me"
            width={300}
            height={300}
            className="w-full max-w-sm h-[300px] w-[300px] object-cover grayscale rounded shadow-lg"
          />
        </motion.div>

        {/* Informasi Text */}
        <motion.div
          className="md:w-1/2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p className="uppercase text-sm text-gray-400 mb-3" variants={fadeInUp}>
            About Me
          </motion.p>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
            variants={fadeInUp}
          >
            Yoga Saputra<br />
            impactful experiences
          </motion.h2>

          <motion.div className="space-y-4">
            {[
              'Studying Of Duta Bangsa University',
              'Informatics Engineering',
              'Basic Internet Of Things',
            ].map((text, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-700 pb-2 hover:text-white text-gray-300 cursor-pointer"
                variants={fadeInUp}
              >
                {text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bagian Bawah - Deskripsi dan Foto Square */}
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start justify-between gap-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Deskripsi */}
        <div className="flex-1 max-w-2xl text-left">
          <motion.p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            I am passionate about the intersection. of creativity and technology. My journey in Informatics Engineering is driven by a deep curiosity to build innovative solutions. I believe in lifelong learning, teamwork, and making an impact through digital products.
          </motion.p>
        </div>

        {/* Foto Square */}
        <Image
          src="/images/daun.jpg"
          alt="Additional Photo"
          width={300}
          height={300}
          className="w-full max-w-sm h-[300px] w-[300px] object-cover grayscale rounded shadow-lg"
        />
      </motion.div>

      {/* Maps */}
      <motion.div
        className="w-full h-[400px] rounded-lg overflow-hidden shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.134618758514!2d110.81816347418307!3d-7.5585315744252195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a15cbcd3a1457%3A0x5558c7d4cbf9d8bb!2sUniversitas%20Duta%20Bangsa%20Surakarta!5e0!3m2!1sen!2sid!4v1717220222373!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </section>
  );
}
