'use client';
//  錯誤邊界不會處理來自同一區段中 layout.tsx 元件的錯誤，因此這個 error boundary component 不能 handle [productId]/layout.tsx 的 error

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      {error.message} <button onClick={reset}>Try again</button>
    </div>
  );
}
