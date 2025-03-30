"use client";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="bg-gradient-to-b from-[#9810FA] to-white text-center py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Ready to start your next project?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Let's collaborate and bring your ideas to life with creativity and innovation.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-[#9810FA] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#7d0ecf] transition"
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </section>
  );
}
