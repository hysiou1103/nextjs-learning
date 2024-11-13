"use client";
import { useState } from "react";
export default function AuthTemplate({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="template-dom">
        {/* template.tsx 中的狀態在頁面之間切換時不會保留，會重新建立新的組件實例。 */}
        <input value={input} onChange={e => setInput(e.target.value)} />
      </div>
      {children}
    </>
  );
}
