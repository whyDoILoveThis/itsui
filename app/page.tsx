'use client';

import Link from 'next/link';

export default function Home() {
  const links = [
    {
      label: "Tooltip",
      href: "/its-tooltip"
    },
    {
      label: "Button",
      href: "/its-btn"
    }
  ]
  return (
    <article className={`p-4 pt-12 flex flex-col gap-2`}>
      <h1 className="text-3xl font-bold mb-4">Components</h1>
      {links.map((link, index) => (

     <Link key={index} className="w-fit border rounded-full border-slate-600 p-2 px-4" href={link.href}>{link.label}</Link>
      ))}

    </article>
  );
}
