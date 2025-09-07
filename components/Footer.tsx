"use client";
import ItsCopyBtn from "@/ItsCopyBtn/ItsCopyBtn";
import Link from "next/link";
import ClipboardCheckIcon from "./icons/ClipboardCheckIcon";
import ClipboardIcon from "./icons/ClipboardIcon";
import { useEffect, useState } from "react";

const Footer = () => {
  const [copying, setCopying] = useState(false);

  useEffect(() => {
    if (copying) {
      setTimeout(() => {
        setCopying(false);
      }, 400);
    }
  }, [copying]);

  return (
    <footer className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-3 p-6 bg-white/5 dark:bg-black/20 backdrop-blur-sm border-t border-slate-300/20">
      {/* Dev Command Section */}
      <div className="text-center dark:bg-white/5 p-2 px-4 rounded-lg">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Run on a specific local port
        </p>
        <span
          onClick={() => {
            setCopying(true);
          }}
          className="relative rounded-md flex justify-center items-center overflow-hidden"
        >
          <ItsCopyBtn
            classNames="btn-ghost !p-1"
            btnText={<ClipboardIcon />}
            copiedText={<ClipboardCheckIcon />}
            text={"npm run dev -- -p 3005"}
          />
          <code className="px-2 py-1 inline-block rounded-md border dark:border-slate-600/50 bg-slate-950/80 text-slate-200 text-xs font-mono relative z-10">
            <span
              className={`${copying ? "animate-[flash_0.4s_ease-out]" : ""}`}
            >
              npm run dev -- -p 3005
            </span>
          </code>

          {/* Flash overlay */}
          {copying && (
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-80 animate-[flash_0.4s_ease-out] rounded-md overflow-hidden" />
          )}
        </span>
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-2 text-sm">
        <Link
          className="px-3 py-1 rounded-lg border border-slate-500/30 bg-black/10 dark:bg-white/5 text-slate-500 dark:text-slate-300 hover:bg-black/20 dark:hover:bg-white/10 transition-colors"
          href={"/blue-bg-flash-on-buttons-in-mobile-browsers"}
        >
          Remove mobile link flash
        </Link>
        <Link
          className="px-3 py-1 rounded-lg border border-slate-500/30 bg-black/10 dark:bg-white/5 text-slate-500 dark:text-slate-300 hover:bg-black/20 dark:hover:bg-white/10 transition-colors"
          href={"/sort-array-alphbetically"}
        >
          Sort array alphabetically
        </Link>
        <Link
          className="px-3 py-1 rounded-lg border border-slate-500/30 bg-black/10 dark:bg-white/5 text-slate-500 dark:text-slate-300 hover:bg-black/20 dark:hover:bg-white/10 transition-colors"
          href={"/chunkArray()"}
        >
          chunkArray()
        </Link>
      </div>

      {/* Signature */}
      <Link
        target="_blank"
        className="mt-4 text-xs text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
        href={"https://ian-smith.vercel.app"}
      >
        Made with ❤️ by Ian Smith
      </Link>
    </footer>
  );
};

export default Footer;
