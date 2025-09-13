import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-green-400 flex items-center justify-center shadow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 2C8 2 4 4 4 8c0 4 4 6 8 12 4-6 8-8 8-12 0-4-4-6-8-6z" fill="white" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">DigiMental</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Supporting mental wellbeing of students with confidential counseling, peer groups and resources.
          </p>

          <div className="mt-4">
            <div className="text-sm text-gray-600 dark:text-gray-300">Helpline</div>
            <a href="tel:+919876543210" className="block mt-1 text-lg font-semibold text-blue-600 dark:text-blue-400">+91 98765 43210</a>
            <div className="text-xs text-gray-500 mt-2">Available 24/7 — Confidential support</div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h4 className="text-md font-semibold mb-3 text-gray-900 dark:text-gray-100">Quick Links</h4>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li><a href="/" className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-600 transition">About</a></li>
            <li><a href="/services" className="hover:text-blue-600 transition">Services</a></li>
            <li><a href="/contact" className="hover:text-blue-600 transition">Contact</a></li>
            <li><a href="/login" className="hover:text-blue-600 transition">Sign In</a></li>
          </ul>

          <div className="mt-6">
            <h5 className="text-sm font-semibold mb-2 text-gray-900 dark:text-gray-100">Tags</h5>
            <div className="flex flex-wrap gap-2">
              {["Counseling","Peer Support","24/7","Students","Resources"].map(tag => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-md font-semibold mb-3 text-gray-900 dark:text-gray-100">Get in touch</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">Email us at</p>
          <a href="mailto:support@dimental.com" className="block mt-1 mb-4 text-blue-600 dark:text-blue-400 font-medium">support@dimental.com</a>

          <div className="flex items-center gap-3 mt-2">
            <a href="#" aria-label="facebook" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <FaFacebookF className="w-4 h-4 text-gray-700 dark:text-gray-200" />
            </a>
            <a href="#" aria-label="instagram" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <FaInstagram className="w-4 h-4 text-gray-700 dark:text-gray-200" />
            </a>
            <a href="#" aria-label="twitter" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <FaTwitter className="w-4 h-4 text-gray-700 dark:text-gray-200" />
            </a>
            <a href="#" aria-label="linkedin" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <FaLinkedin className="w-4 h-4 text-gray-700 dark:text-gray-200" />
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            <div>Office: 123 Student Lane, City</div>
            <div className="mt-2">Terms • Privacy • FAQ</div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div>© {new Date().getFullYear()} DigiMental. All rights reserved.</div>
          <div className="mt-2 md:mt-0">Built with ❤️ for students — <span className="font-medium">Confidential & Safe</span></div>
        </div>
      </div>
    </footer>
  );
}
