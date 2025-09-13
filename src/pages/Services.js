import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaUsers, FaBook, FaPhone } from "react-icons/fa";

const services = [
  { title: "Counseling Sessions", desc: "Secure video and in-person sessions with licensed professionals.", icon: <FaBrain size={28} />, color: "bg-gradient-to-br from-blue-500 to-indigo-500" },
  { title: "Peer Communities", desc: "Moderated group sessions focused on study stress, homesickness and more.", icon: <FaUsers size={28} />, color: "bg-gradient-to-br from-green-400 to-teal-400" },
  { title: "Self-Help Resources", desc: "Evidence-based articles, podcasts and short courses.", icon: <FaBook size={28} />, color: "bg-gradient-to-br from-yellow-400 to-orange-400" },
  { title: "24/7 Helpline", desc: "Confidential immediate help for students in crisis.", icon: <FaPhone size={28} />, color: "bg-gradient-to-br from-red-400 to-pink-400" },
];

export default function Services() {
  return (
    <div className="min-h-screen px-6 py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.h1 initial={{ y: 8, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration:0.5 }} className="text-4xl font-bold text-center mb-10 text-blue-600">Our Services</motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity:0, y:10 }} whileHover={{ scale:1.03 }} animate={{ opacity:1, y:0 }} transition={{ delay: i*0.08 }} className="rounded-2xl p-6 shadow-md bg-white dark:bg-gray-800">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl text-white mb-4 ${s.color} shadow`}>
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
              <div className="mt-4">
                <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">Learn more →</button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary CTA */}
        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} className="mt-12 p-8 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xl font-bold">Need a tailored plan for your campus?</div>
              <div className="text-sm opacity-90 mt-1">We can partner with your college/university to build student mental health programs.</div>
            </div>
            <div>
              <a href="/contact" className="px-6 py-3 rounded-md bg-white text-blue-600 font-semibold">Contact Sales</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
