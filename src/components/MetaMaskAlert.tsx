"use client";

import { useEffect, useState } from "react";

const MetaMaskAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !(window as any).ethereum) {
      setShowAlert(true);
    }
  }, []);

  if (!showAlert) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md bg-yellow-100 text-black p-4 rounded-lg shadow-lg z-50">
      <p className="font-medium">
        ⚠️ Trình duyệt của bạn chưa cài MetaMask.{" "}
        <button
          onClick={() => {
            window.open("https://docs.google.com/document/d/1WlURYzm7tsBrRaseXSOQAlvEVYo9KWD9p3sU5gBbXUg/edit?usp=sharing", "_blank");
          }}
          className="text-blue-600 underline font-semibold hover:text-blue-800"
        >
          Bấm vào đây
        </button>{" "}
        để xem hướng dẫn cài đặt và sử dụng.
      </p>
    </div>
  );
};

export default MetaMaskAlert;
