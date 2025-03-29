"use client";

import { usePathname, useRouter } from "next/navigation";

const NavbarTabs = () => {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { label: "🏠 Trang chủ", path: "/" },
    { label: "📚 Quản lý sách", path: "/book" },
    { label: "📜 Lịch sử sách", path: "/book/history" },
  ];

  return (
    <div className="flex justify-center gap-4 bg-gray-950">
      {tabs.map((tab) => (
        <button
          key={tab.path}
          onClick={() => router.push(tab.path)}
          className={`px-4 py-2 rounded-md font-medium transition text-white hover:scale-105 ${
            pathname === tab.path
              ? "bg-blue-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default NavbarTabs;
