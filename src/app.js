import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-center"
      >
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-indigo-100 flex items-center justify-center text-3xl font-bold text-indigo-600">
          M
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Manideep
        </h1>

        <p className="text-gray-500 mb-6">
          Roll Number: 2023BCS0095
        </p>

        <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition duration-300">
          View Profile
        </button>
      </motion.div>

    </div>
  );
}
