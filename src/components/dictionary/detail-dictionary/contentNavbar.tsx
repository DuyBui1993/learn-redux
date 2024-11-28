"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TabNav = [
  {
    id: 1,
    content: "Định nghĩa",
    href: "/dictionary/detail",
  },
  {
    id: 2,
    content: "Từ đồng nghĩa/ Trái nghĩa",
    href: "/dictionary/detail/synonyms-antonyms",
  },
  {
    id: 3,
    content: "Tài liệu trích dẫn",
    href: "/dictionary/detail/references",
  },
  {
    id: 4,
    content: "Idioms",
    href: "/dictionary/detail/idioms",
  },
];

export const ContentNavbar = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="flex flex-col items-center gap-6 py-4 text-lg">
        <div className="flex space-x-4">
          {TabNav.map((tab) => (
            <Link key={tab.id} href={tab.href}>
              <div
                className={` px-4 py-2 text-xl text-white font-medium ${pathname === tab.href ? "border-b-4 border-b-amber-500 " : ""}`}
              >
                {tab.content}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
