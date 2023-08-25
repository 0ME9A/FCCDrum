import { BsGithub } from "react-icons/bs";
import { Gruppo } from "next/font/google";

import Link from "next/link";
import React from "react";

const GoogleFont = Gruppo({ subsets: ["latin"], weight: ["400"] });

function Nav() {
  return (
    <nav className="flex items-center justify-between gap-2 p-3 sm:p-5 fixed top-0 z-20 w-full backdrop-blur-sm">
      <Link
        href={"/"}
        className={`${GoogleFont.className} text-2xl font-extrabold`}
      >
        FCC Drum
      </Link>
      <Link
        href={"https://github.com/0me9a/drum"}
        className="border-2 border-transparent p-[4px] sm:p-2 px-3 sm:px-5 rounded-xl bg-orange-800 hover:border-orange-950 shadow-lg shadow-orange-700/50 flex items-center gap-3"
      >
        <BsGithub />
        GitHub
      </Link>
    </nav>
  );
}

export default Nav;
