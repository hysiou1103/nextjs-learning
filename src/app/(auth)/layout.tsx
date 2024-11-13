"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // hooks 只能在 client component 中使用
import { useState } from "react";
import "./styles.css";

const navLink = [
  { name: "Login", href: "/login" },
  { name: "ForgetPassword", href: "/forget-password" },
  { name: "Register", href: "/register" },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const [input, setInput] = useState("");
  return (
    <div>
      {/* <div>
        <input value={input} onChange={e => setInput(e.target.value)} />
      </div> */}
      {/* layout.tsx 中的狀態在頁面之間切換時會被保留。可以開啟這個註解，在輸入框輸入一些值，並切換路由觀察輸入框value的變化，
      這很好的說明了 template 跟 layout 的差別 */}
      {navLink.map(link => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
