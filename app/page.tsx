'use client';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import ItsSearchbar from '../ItsSearchbar/ItsSearchbar';

export default function Home() {
  const [searchTerm, setSearchterm] = useState("");
  const links = [
    {
      label: "Tooltip",
      href: "/its-tooltip"
    },
    {
      label: "Button",
      href: "/its-btn"
    },
    {
      label: "Search Bar",
      href: "/its-searchbar"
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
    <ItsSearchbar  searchbarWidth='150px' searchTerm={searchTerm} setSearchTerm={setSearchterm}/>
    </article>
  );
}
