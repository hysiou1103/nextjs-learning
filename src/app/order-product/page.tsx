"use client";
import { useRouter } from "next/navigation";
// Navigating Programmatically， useRouter hooks 只能用在 client component
export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/"); // push a new history
    // router.replace("/"); // replace history，跟Link Component 的 replace props 作用一樣
    // router.back() // 回到上一頁
    // router.forward() // 前往下一頁
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Order</button>
    </>
  );
}
