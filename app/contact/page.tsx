'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';

export default function ContactFormMinimal() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !message) return;

    const { error } = await supabase.from('comments').insert([{ name, message }]);

    if (!error) {
      setName('');
      setMessage('');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-black px-4 py-12 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-xl">
        <h2 className="text-3xl font-semibold text-center mb-10">Contact</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* First Name */}
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-black border-b border-white text-white px-1 py-2 focus:outline-none placeholder-gray-400"
              placeholder="First Name"
              required
            />
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full bg-black border-b border-white text-white px-1 py-2 focus:outline-none placeholder-gray-400 resize-none"
              placeholder="Message"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Success Message */}
        {success && (
          <motion.p
            className="text-green-400 text-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Terima kasih! Komentarmu berhasil dikirim.
          </motion.p>
        )}
      </div>
    </motion.section>
  );
}
