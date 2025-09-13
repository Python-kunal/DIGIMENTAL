import React from "react";
import { Link } from "react-router-dom";

export default function Button({ text, link }) {
  return (
    <Link
      to={link}
      className="bg-white text-blue-600 hover:bg-gray-100 dark:text-blue-400 dark:hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition"
    >
      {text}
    </Link>
  );
}
