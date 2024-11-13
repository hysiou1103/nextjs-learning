"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // hooks 只能在 client component 中使用
import "./styles.css";

const navLink = [
  { name: "Login", href: "/login" },
  { name: "ForgetPassword", href: "/forget-password" },
  { name: "Register", href: "/register" },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  return (
    <div>
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
