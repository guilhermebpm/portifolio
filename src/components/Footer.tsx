'use client';

import Link from 'next/link';
import type React from 'react';

type FooterProps = {
	name?: string;
};

const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/users', label: 'Uses' },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-100 bg-white">  {/*dark:border-zinc-700/40 dark:bg-zinc-900 add this for dark mode*/}
      <div className="mx-auto w-full max-w-[1280px] flex flex-col items-center gap-3 px-8 pt-10 pb-16 md:flex-row md:items-center md:justify-between md:px-[144px] md:pt-[40px] md:pb-[64px]">

        <nav className="flex gap-6">
          <a href="#" className="pt-2 pb-2 text-base leading-7 font-normal text-zinc-800 hover:text-black ">Home</a>      {/*dark:text-zinc-300 dark:hover:text-white add this for dark mode*/}
          <a href="#" className="pt-2 pb-2 text-base leading-7 font-normal text-zinc-800 hover:text-black ">About</a>     {/*dark:text-zinc-300 dark:hover:text-white add this for dark mode*/}
          <a href="#" className="pt-2 pb-2 text-base leading-7 font-normal text-zinc-800 hover:text-black ">Projects</a>  {/*dark:text-zinc-300 dark:hover:text-white add this for dark mode*/}
          <a href="#" className="pt-2 pb-2 text-base leading-7 font-normal text-zinc-800 hover:text-black ">Uses</a>      {/*dark:text-zinc-300 dark:hover:text-white add this for dark mode*/}
        </nav>

        <p className="text-sm leading-6 font-normal text-zinc-400"> {/*dark:text-zinc-500* add this for dark mode*/}
          © 2024 John Doe. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
Footer.displayName = 'Footer';
