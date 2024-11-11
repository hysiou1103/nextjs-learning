import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog", // 強制此頁忽略 layout 定義的 template & default
  },
};

export default function Blog() {
  return <h1>blog Page</h1>;
}
