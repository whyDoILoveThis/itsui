import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import SearchButton from "./SearchButton";

const Navbar = () => {
  const ItsUiLogo = "/ItsUiLogo.png";

  return (
    <nav className="fixed zz-top border-b border-slate-400 flex justify-between top-0 left-0 w-full bg-white bg-opacity-10 backdrop-blur-md p-2.5">
      <Link
        href="/"
        className="text-2xl text-shadow text-slate-900 dark:text-slate-200 flex items-center gap-1 font-bold"
      >
        <img width={30} height={30} src={ItsUiLogo} alt={"logo"} />
        ItsUi
      </Link>
      <span className="flex items-center gap-2">
        <ModeToggle />
      </span>
    </nav>
  );
};

export default Navbar;
