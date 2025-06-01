// components/HeroSection.tsx
'use client';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-black text-white text-center overflow-hidden px-4">
      <h1
        className="text-[12vw] font-extrabold uppercase leading-none bg-cover bg-center bg-clip-text text-transparent"
        style={{
          backgroundImage: 'url(/images/forest.png)',
        }}
      >
        Yoga
      </h1>
      <p className="mt-6 text-lg md:text-xl max-w-3xl text-gray-300">
        <span className="line-through">Counselor</span> to{' '}
        <span className="italic">Traveler</span> to{' '}
        <span className="line-through">Educator</span> to{' '}
        <span className="font-semibold">Designer</span>: Bridging the Gaps to
        Solve Complex Problems
      </p>
    </section>
  );
}
