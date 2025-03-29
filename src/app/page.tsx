"use client";

import { useEffect, useState } from "react";

const HomePage = () => {
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const updateMessage = async () => {};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="p-4 sm:p-6 w-full max-w-xl mx-4 sm:mx-auto text-center space-y-4 bg-gray-900 text-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold">
          🚀 Smart Contract Message -{" "}
          <a href="https://snakechain.io.vn" target="_blank">
            Snake Chain 🐍
          </a>
        </h1>

        <div className="text-sm text-gray-400">
          <p className="break-all">
            <span className="font-semibold text-white">Account:</span> (Account
            Address)
          </p>

          <p className="text-xl">
            <span className="font-semibold text-white">Message:</span> {message}
          </p>
        </div>

        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Enter new message..."
          className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={updateMessage}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-semibold transition disabled:opacity-50"
          disabled={!newMessage.trim()}
        >
          Update Message
        </button>
      </div>
    </div>
  );
};

export default HomePage;
