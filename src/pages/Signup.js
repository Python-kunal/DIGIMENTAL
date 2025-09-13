import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

export default function Signup() {
  const [data, setData] = useState({ name:"", email:"", pw:"", confirm:"" });
  const [show, setShow] = useState(false);

  const handle = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.pw) return alert("Fill required fields");
    if (data.pw !== data.confirm) return alert("Passwords don't match");
    console.log("signup", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-10">
      <motion.div initial={{ scale:0.98, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:0.4 }} className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Create an account</h2>

        <button className="w-full flex items-center justify-center gap-3 border border-gray-200 dark:border-gray-700 py-2 rounded-lg mb-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <FcGoogle /> Sign up with Google
        </button>

        <div className="flex items-center gap-2 mb-4">
          <hr className="flex-1 border-gray-200 dark:border-gray-700" />
          <span className="text-xs text-gray-500 dark:text-gray-400">or</span>
          <hr className="flex-1 border-gray-200 dark:border-gray-700" />
        </div>

        <form onSubmit={submit} className="space-y-4">
          <input name="name" value={data.name} onChange={handle} placeholder="Full name" className="w-full px-4 py-3 rounded-md border bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500" />
          <input name="email" value={data.email} onChange={handle} placeholder="Email address" className="w-full px-4 py-3 rounded-md border bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500" />
          <div className="relative">
            <input name="pw" value={data.pw} onChange={handle} type={show ? "text" : "password"} placeholder="Password" className="w-full px-4 py-3 rounded-md border bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="relative">
            <input name="confirm" value={data.confirm} onChange={handle} type={show ? "text" : "password"} placeholder="Confirm password" className="w-full px-4 py-3 rounded-md border bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500" />
            <button type="button" onClick={() => setShow(s => !s)} className="absolute right-3 top-3 text-sm text-gray-500">{show ? "Hide" : "Show"}</button>
          </div>

          <button type="submit" className="w-full py-3 rounded-md bg-gradient-to-r from-green-500 to-teal-400 text-white font-semibold">Create account</button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">Already registered? <a href="/login" className="text-blue-600">Sign in</a></p>
      </motion.div>
    </div>
  );
}
