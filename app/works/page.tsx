"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WorksPage() {
  const works = [
    { title: "Internet Of Things Smart Farming", slug: "smart-farming" },
    { title: "Monitoring Website with Next.js", slug: "nextjs-monitoring" },
    { title: "Monitoring Website with PHP", slug: "php-monitoring" },
    { title: "Monitoring Website with HTML + CSS", slug: "htmlcss-monitoring" },
    { title: "Website Product with Next.js", slug: "product-nextjs" },
    { title: "Freelance Pengajar Robotik - Sentral Robotik.id", slug: "freelance" },
    { title: "Website Innovation Robotic Competition - MTsN 2 Sukoharjo", slug: "website-lomba-irc" },
    { title: "Website Colomadu Archery Club, Club Memanah Solo raya", slug: "website-CAC" },
  ];

  return (
    <section className="min-h-screen bg-black text-white px-6 py-28">
      {/* Title */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center mb-16 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Works
        <span className="block mt-3 h-1 w-16 mx-auto bg-white/20 rounded-full" />
      </motion.h1>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2">
        {works.map((project, index) => (
          <Link key={project.slug} href={`/works/${project.slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="
                relative overflow-hidden
                rounded-2xl border border-white/10
                bg-gradient-to-br from-zinc-900 to-black
                px-6 py-8 cursor-pointer
                transition-all duration-300
                hover:border-white/30
                hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
              "
            >
              {/* subtle glow */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 bg-white/5" />

              <h2 className="relative z-10 text-lg font-semibold leading-snug">
                {project.title}
              </h2>

              <p className="relative z-10 mt-3 text-sm text-white/50">
                View project →
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
