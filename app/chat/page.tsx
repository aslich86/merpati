"use client";

import { useState } from "react";

export default function ChatRoom() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="p-4 bg-purple-700 text-white font-bold text-lg shadow">
        Ruang Obrolan MERPATI
      </header>

      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow px-4 py-2 max-w-md w-fit"
          >
            {msg}
          </div>
        ))}
      </div>

      <footer className="p-4 bg-white flex gap-2 border-t">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded px-3 py-2"
          placeholder="Tulis pesan..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
        >
          Kirim
        </button>
      </footer>
    </div>
  );
}
