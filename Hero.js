import React from "react";
import { Link } from "react-router-dom";

export default function Hero({ title, subtitle, ctaText, ctaLink, bgImage }) {
  return (
    <div
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-2xl mb-8">{subtitle}</p>
        <Link
          to={ctaLink}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
}
