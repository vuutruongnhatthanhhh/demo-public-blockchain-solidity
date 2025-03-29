"use client";

import { useEffect, useState } from "react";

export default function BookHistory() {
  const [history, setHistory] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("Tất cả");
  const [selectedBookId, setSelectedBookId] = useState<string>("");

  const filteredHistory = history.filter((item) => {
    const typeMatch = filter === "Tất cả" || item.type === filter;
    const idMatch =
      selectedBookId === "" || item.id.toString() === selectedBookId;
    return typeMatch && idMatch;
  });

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const time = date.toLocaleTimeString();
    return `${day}-${month}-${year}, ${time}`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="p-6 w-full max-w-3xl bg-gray-900 text-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">
          📜 Lịch sử hoạt động -{" "}
          <a href="https://snakechain.io.vn" target="_blank">
            Snake Chain 🐍
          </a>
        </h1>

        <div className="mb-6 flex flex-col md:flex-row gap-4 justify-center">
          <div>
            <label className="mr-2 font-medium">Bộ lọc hành động:</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-700 bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Tất cả">Tất cả</option>
              <option value="Thêm">Thêm</option>
              <option value="Cập nhật">Cập nhật</option>
              <option value="Xoá">Xoá</option>
            </select>
          </div>

          <div>
            <label className="mr-2 font-medium">Bộ lọc theo sách (ID):</label>
            <select
              value={selectedBookId}
              onChange={(e) => setSelectedBookId(e.target.value)}
              className="border border-gray-700 bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Tất cả</option>
              {Array.from(new Set(history.map((item) => item.id))).map((id) => (
                <option key={id} value={id}>
                  Sách ID: {id}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="max-h-[400px] overflow-y-auto pr-2 custom-scroll">
          <ul className="space-y-3">
            {filteredHistory.map((book: any, index: number) => (
              <li
                key={`${book.id}-${index}`}
                className="border border-gray-700 bg-gray-800 p-4 rounded flex justify-between items-center shadow-sm"
              >
                <div>
                  <p className="font-semibold text-lg">
                    {book.title} - {book.author}
                  </p>
                  <p className="text-sm text-gray-400">
                    ID: {book.id} | Block: #{book.blockNumber} | Hành động:{" "}
                    {book.type}
                  </p>
                  <p className="text-sm text-gray-500">🕒 {book.timestamp}</p>
                </div>
              </li>
            ))}
            {filteredHistory.length === 0 && (
              <p className="text-center text-gray-500">
                Không có lịch sử nào được ghi nhận.
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
