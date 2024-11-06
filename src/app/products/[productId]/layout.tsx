// 在這個例子中，children props 為 productId/page.tsx，而此layout 會被崁套在 root layout 的 children 位置
export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <h2>Features Product</h2>
    </>
  );
}
