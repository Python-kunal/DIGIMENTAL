import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/outline";

const features = [
  { title: "Professional Counseling", desc: "One-on-one licensed counselor sessions tailored for students.", color: "from-blue-500 to-indigo-500" },
  { title: "Peer Support Groups", desc: "Safe, moderated student groups to share and heal together.", color: "from-green-400 to-teal-400" },
  { title: "Resources & Courses", desc: "Guides, short courses, and toolkits to build resilience.", color: "from-yellow-400 to-orange-400" },
  { title: "24/7 Helpline", desc: "Immediate confidential help available round the clock.", color: "from-red-400 to-pink-400" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543965173-9e6d07a7f8f7?auto=format&fit=crop&w=1600&q=80')] bg-center bg-cover opacity-30 dark:opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Your mental wellbeing — <span className="text-blue-600 dark:text-blue-400">supported,</span> not alone.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-8">
              DigiMental offers confidential counseling, peer groups and resources specifically designed for students in higher education.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup" className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-teal-400 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transform transition">
                Get started
                <ArrowRightIcon className="w-4 h-4" />
              </Link>

              <a href="tel:+919876543210" className="inline-flex items-center gap-3 border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                Call Helpline: <span className="font-semibold text-blue-600 dark:text-blue-400 ml-2">+91 98765 43210</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" initial="hidden" animate="visible" variants={{
          hidden: {}, visible: { transition: { staggerChildren: 0.12 } }
        }}>
          {features.map((f, i) => (
            <motion.article key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition" variants={{
              hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 }
            }}>
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${f.color} text-white mb-4 shadow`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2C8 2 4 4 4 8c0 4 4 6 8 12 4-6 8-8 8-12 0-4-4-6-8-6z" fill="white"/></svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Testimonial + CTA */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x:0, opacity:1 }} transition={{ duration: 0.6 }} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow">
            <div className="flex items-start gap-4">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="user" className="w-14 h-14 rounded-full object-cover shadow" />
              <div>
                <div className="text-lg font-semibold">“This platform helped me navigate exam stress and find a counselor who truly listened.”</div>
                <div className="text-sm text-gray-500 mt-2">— A. Sharma, Student</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x:0, opacity:1 }} transition={{ duration: 0.6 }} className="p-8">
            <h3 className="text-2xl font-bold mb-3">Need immediate support?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">If you or someone you know is in crisis, call our confidential helpline immediately.</p>
            <div className="flex gap-4">
              <a href="tel:+919876543210" className="px-6 py-3 rounded-md bg-red-500 text-white font-semibold shadow hover:opacity-95 transition">Call Now</a>
              <Link to="/contact" className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
