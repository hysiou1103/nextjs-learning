// 在這個例子中，children props 為 productId/page.tsx，而此layout 會被崁套在 root layout 的 children 位置
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error('Error loading product');
  }

  return (
    <>
      {children}
      <h2>Features Product</h2>
    </>
  );
}
