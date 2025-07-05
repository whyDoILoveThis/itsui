"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import ItsFileInput from "@/ItsFileInput/ItsFileInput";
import { componentLinks } from "@/lib/links-components";

export default function Home() {
  return (
    <article className={`h-full p-4 pt-12 flex flex-col gap-2`}>
      <div>
        <h1 className="text-3xl font-bold">Components</h1>
        <p className="mb-4">
          A collection of easy to use minimalist components
        </p>
      </div>
      <div className="border-t border-l rounded-tl-sm flex flex-col gap-2 w-fit p-2 border-slate-600 dark:border-slate-400 border-opacity-50">
        {componentLinks
          .sort((a, b) => a.label.localeCompare(b.label)) // Sorts the links alphabetically by label
          .map((link, index) => (
            <Link
              key={index}
              className="group relative inline-block dark:text-slate-300 dark:hover:text-slate-100"
              href={link.href}
            >
              {link.label}
              <span className="absolute top-0 rounded-sm -left-1 h-[24px] w-0 opacity-20 bg-slate-600 dark:bg-slate-400 transition-all duration-300 group-hover:w-[110%]"></span>
            </Link>
          ))}
      </div>
    </article>
  );
}
