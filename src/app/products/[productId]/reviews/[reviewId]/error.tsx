"use client";
// 必須為 clinet component，可以接收 error 物件，
// 這裡的 error.message 為我們在 [reviewId]/page.tsx 中的 throw new Error
// reset function 是去 rerender error content，若成功，error content 將被 page.tsx 的 content 替代
// 若要使用 error function 則 page.tsx 也須轉為 client component
export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      {error.message} <button onClick={reset}>Try again</button>
    </div>
  );
}
