"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [books, setBooks] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [editingBookId, setEditingBookId] = useState<number | null>(null);

  const fetchBooks = async (contractInstance: any) => {
    try {
      const books = await contractInstance.methods.getAllBooks().call();
      setBooks(books.reverse());
    } catch (err) {
      console.error("Lỗi lấy danh sách sách:", err);
    }
  };

  const handleAddOrUpdateBook = async () => {};

  const handleDeleteBook = async (id: number) => {};

  const handleEditBook = (book: any) => {
    setTitle(book.title);
    setAuthor(book.author);
    setEditingBookId(book.id);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="p-6 w-full max-w-3xl bg-gray-900 text-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">
          📚 Quản lý sách -{" "}
          <a href="https://snakechain.io.vn" target="_blank">
            Snake Chain 🐍
          </a>
        </h1>

        <div className="mb-6 flex flex-col md:flex-row gap-4 justify-center">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Tên sách"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Tác giả"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddOrUpdateBook}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-semibold transition"
          >
            {editingBookId !== null ? "Cập nhật sách" : "Thêm sách"}
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-center">
          📖 Danh sách sách
        </h2>
        <div className="max-h-[400px] overflow-y-auto pr-2 custom-scroll">
          <ul className="space-y-3">
            {books.map((book: any) => (
              <li
                key={book.id}
                className="border border-gray-700 bg-gray-800 p-4 rounded flex justify-between items-center shadow-sm"
              >
                <div>
                  <p className="font-semibold text-lg">
                    {book.title} - {book.author}
                  </p>
                  <p className="text-sm text-gray-400">ID: {book.id}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditBook(book)}
                    className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-white"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDeleteBook(book.id)}
                    className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white"
                  >
                    Xoá
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
