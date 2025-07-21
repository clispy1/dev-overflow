import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ModeToggle } from "./theme";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          alt="DevOverflow"
          width={23}
          height={23}
        />

        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">flow</span>
        </p>
      </Link>

      <p>Global Search</p>

      <ModeToggle />
    </nav>
  );
};

export default Navbar;
