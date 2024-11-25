"use client";
// 必須為 clinet component，可以接收 error 物件，
// 這裡的 error.message 為我們在 [reviewId]/page.tsx 中的 throw new Error
export default function ErrorBoundary({ error }: { error: Error }) {
  return <div>{error.message}</div>;
}
