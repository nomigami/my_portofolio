'use client';

import { motion } from 'framer-motion';

export default function WorksPage() {
  const works = [
    'Internet Of Things Smart Farming',
    'Monitoring Website with Next.js',
    'Monitoring Website with PHP',
    'Monitoring Website with HTML+CSS',
  ];

  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4 py-24"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {/* Title */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-14 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Works
      </motion.h1>

      {/* Works List */}
      <div className="w-full max-w-3xl flex flex-col gap-6">
        {works.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-lg text-gray-100 px-6 py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white/10 transition duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2 * index,
              duration: 0.6,
              ease: 'easeOut',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <h2 className="text-xl font-semibold text-center">{project}</h2>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
