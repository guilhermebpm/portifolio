'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavbarItemProps = {
	path: string;
	children: React.ReactNode;
};

function NavbarItem({ children, path }: NavbarItemProps) {
  const pathname = usePathname();
  
  const isActive = pathname === path || (path !== '/' && pathname.startsWith(path));

  return (
    <li className={`relative cursor-pointer px-3 py-2 font-medium text-sm leading-6 transition-colors duration-200 ${
      isActive ? 'text-teal-500' : 'text-zinc-800 hover:text-teal-500'
    }`}>
      <Link href={path} className="outline-none">
        {children}
      </Link>
      
      
      {isActive && (
        <div className="absolute inset-x-0 bottom-0 flex justify-center">
    <div 
      className="w-[51px] h-[2px] z-0"
      style={{
        // 1. Create thin border with gradient
        background: 'linear-gradient(to right, transparent, oklch(70.4% 0.14 182.503), transparent)',
         
        // 3. Add shadow in the bottom
        boxShadow: '0 4px 12px oklch(70.4% 0.14 182.503)' 
      }}
    ></div>
  </div>

)}
    </li>
  );
}

const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/uses', label: 'Uses' },
];

export function Navbar() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2"> 
      <ul className='flex h-10 w-fit flex-row items-center gap-1 rounded-full border border-zinc-500/5 bg-white px-3 shadow-lg'>
        <NavbarItem path='/'>Home</NavbarItem>
        <NavbarItem path='/about'>About</NavbarItem>
        <NavbarItem path='/projects'>Projects</NavbarItem>
        <NavbarItem path='/users'>Users</NavbarItem>
      </ul>
    </nav>
  );
}
