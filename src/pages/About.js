import React from "react";
import { motion } from "framer-motion";

const timeline = [
  { year: "2020", title: "Founded", desc: "DigiMental started with a vision to support students' mental health." },
  { year: "2021", title: "Peer Groups Launch", desc: "Introduced moderated peer support communities across universities." },
  { year: "2022", title: "Counseling Network", desc: "Partnered with certified counselors for one-on-one sessions." },
];

const team = [
  { name: "Dr. Neha Rao", role: "Clinical Psychologist", img: "https://randomuser.me/api/portraits/women/45.jpg" },
  { name: "Amit Verma", role: "Product Lead", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Sana Khan", role: "Community Manager", img: "https://randomuser.me/api/portraits/women/65.jpg" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h1 initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }} className="text-4xl font-bold mb-6 text-center text-blue-600">About DigiMental</motion.h1>
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.1 }} className="text-center text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          We build safe, confidential mental health support for students — combining professional therapy with peer support and educational resources.
        </motion.p>

        {/* Timeline */}
        <div className="relative border-l border-gray-200 dark:border-gray-700 pl-6 mb-12">
          {timeline.map((t, i) => (
            <motion.div key={i} initial={{ opacity:0, x:-10 }} animate={{ opacity:1, x:0 }} transition={{ delay: i * 0.12 }} className="mb-10">
              <div className="absolute -left-3 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow" />
              <div className="ml-2">
                <div className="text-sm text-gray-500 dark:text-gray-400">{t.year}</div>
                <div className="text-xl font-semibold">{t.title}</div>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Meet the team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((m, idx) => (
              <motion.div key={idx} initial={{ scale:0.98, opacity:0 }} whileHover={{ scale:1.02 }} animate={{ scale:1, opacity:1 }} transition={{ delay: idx*0.08 }} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
                <img src={m.img} alt={m.name} className="mx-auto w-28 h-28 rounded-full object-cover mb-4 shadow" />
                <div className="text-lg font-semibold">{m.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{m.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
