import Link from 'next/link';

export default function F1() {
  return (
    <>
      <h1>F1 Page</h1>
      <div>
        <Link href="/f1/f2">f2</Link>
        <Link href="/about">About</Link>
        {/* 這個about 並不會導航至(...)about/page.tsx */}
      </div>
    </>
  );
}
