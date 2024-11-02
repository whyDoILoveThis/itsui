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
      <div>
        <h1 className="text-3xl font-bold">Components</h1>
        <p className='mb-4'>A collection of easy to use minimalist components</p>
      </div>
      {links.map((link, index) => (

     <Link key={index} className="btn" href={link.href}>{link.label}</Link>
      ))}

    </article>
  );
}
