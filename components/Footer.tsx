import { socialLink } from "@/src/data/social";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <ul className="p-1 flex items-center w-fit rounded-full mx-auto mb-10 gap-2 bg-orange-800 shadow-xl shadow-orange-700/50">
        {socialLink.map((item) => (
          <li
            key={item.title}
            className="p-3 aspect-square bg-orange-800 rounded-full border-2 border-transparent hover:border-orange-500 hover:bg-orange-700"
          >
            <Link
              href={item.url}
              title={item.title}
              className="text-xl"
              target="_blank"
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>

      <p className="text-center py-1 font-light text-sm">
        Designed and developed by{" "}
        <strong className="text-orange-500">Baliram Singh</strong> (OMEGA)
      </p>
    </footer>
  );
}

export default Footer;
