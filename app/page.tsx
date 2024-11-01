'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <article className={`p-4 pt-12 flex flex-col`}>
      <h1 className="text-3xl font-bold mb-4">Components</h1>
     <Link className="w-fit border rounded-full border-slate-600 p-2 px-4" href="/its-tooltip">Tooltip</Link>
    </article>
  );
}
