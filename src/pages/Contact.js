import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // simple client-side validation
    if (!form.name || !form.email || !form.message) return alert("Please fill all fields");
    console.log("contact:", form);
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <motion.div initial={{ x:-10, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.5 }} className="space-y-6">
          <h1 className="text-3xl font-bold text-blue-600">Get in touch</h1>
          <p className="text-gray-700 dark:text-gray-300">Questions, partnerships or immediate help — we’re here. Reach out and we’ll respond asap.</p>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
            <div className="flex items-center gap-3 mb-3"><FaPhone className="text-blue-600"/><div>+91 98765 43210</div></div>
            <div className="flex items-center gap-3 mb-3"><FaEnvelope className="text-blue-600"/><div>support@dimental.com</div></div>
            <div className="flex items-center gap-3"><FaMapMarkerAlt className="text-blue-600"/><div>123 Student Lane, City</div></div>
          </div>

          <div className="flex gap-3 mt-4">
            <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-md">Facebook</a>
            <a href="#" className="px-4 py-2 bg-pink-500 text-white rounded-md">Instagram</a>
            <a href="#" className="px-4 py-2 bg-blue-400 text-white rounded-md">Twitter</a>
          </div>
        </motion.div>

        <motion.form initial={{ x:10, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.5 }} onSubmit={submit} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          <div className="grid gap-4">
            <div className="relative">
              <input name="name" value={form.name} onChange={change} placeholder=" " className="peer w-full border rounded-md px-4 py-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <label className="absolute left-4 top-2 text-sm text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">Your name</label>
            </div>

            <div className="relative">
              <input name="email" value={form.email} onChange={change} placeholder=" " className="peer w-full border rounded-md px-4 py-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <label className="absolute left-4 top-2 text-sm text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">Email address</label>
            </div>

            <div className="relative">
              <textarea name="message" value={form.message} onChange={change} placeholder=" " rows="5" className="peer w-full border rounded-md px-4 py-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <label className="absolute left-4 top-2 text-sm text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">Your message</label>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-md font-semibold shadow">Send message</button>

            {sent && <div className="text-sm text-green-600">Message sent — we will contact you soon.</div>}
          </div>
        </motion.form>
      </div>
    </div>
  );
}
