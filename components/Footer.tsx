import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 items-center p-4 h-fit bg-white bg-opacity-10 border-t border-slate-400">
      <Link
        className="border h-fit border-slate-500 border-opacity-30 px-1 rounded-md bg-black bg-opacity-10 dark:bg-opacity-20 text-slate-500 hover:text-slate-600 hover:bg-opacity-5 dark:text-slate-300 dark:hover:bg-opacity-5"
        href={"/blue-bg-flash-on-buttons-in-mobile-browsers"}
      >
        Remove the blue bg flash on links in mobile browsers
      </Link>
      <Link
        className="border h-fit border-slate-500 border-opacity-30 px-1 rounded-md bg-black bg-opacity-10 dark:bg-opacity-20 text-slate-500 hover:text-slate-600 hover:bg-opacity-5 dark:text-slate-300 dark:hover:bg-opacity-5"
        href={"/sort-array-alphbetically"}
      >
        Sort array alphabetically
      </Link>
      <Link
        target="_blank"
        className="mt-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        href={"https://ian-smith.vercel.app"}
      >
        Made by - Ian Smith
      </Link>
    </footer>
  );
};

export default Footer;
