'use client';
import { useState } from 'react'; // Đã thêm import này
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// 1. Mảng dữ liệu các đường link
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/users', label: 'Uses' },
];

type NavbarItemProps = {
  path: string;
  children: React.ReactNode;
};

// 2. Component cho từng item trên Desktop
function NavbarItem({ children, path }: NavbarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === path || (path !== '/' && pathname.startsWith(path));

  return (
    <li className={`relative cursor-pointer px-3 py-2 font-medium text-sm leading-6 transition-colors duration-200 ${
      isActive ? 'text-teal-500' : 'text-foreground hover:text-teal-500'
    }`}>
      <Link href={path} className="outline-none">
        {children}
      </Link>
      
      {isActive && (
        <div className="absolute inset-x-0 bottom-0 flex justify-center">
          <div 
            className="w-[51px] h-[2px] z-0"
            style={{
              background: 'linear-gradient(to right, transparent, oklch(70.4% 0.14 182.503), transparent)',
              boxShadow: '0 4px 12px oklch(70.4% 0.14 182.503)' 
            }}
          ></div>
        </div>
      )}
    </li>
  );
}

// 3. Component chính
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // Tìm tên trang hiện tại để hiển thị trên nút Menu
  const currentLabel = navLinks.find(link => link.href === pathname)?.label || 'Menu';

  return (
    <nav className="relative h-15"> 
      {/* VIEW DESKTOP */}
      <ul className='hidden md:flex h-10 w-full flex-row items-center gap-1 rounded-full bg-background px-3 border border-foreground/5 shadow-[0_10px_11px_-5px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]'>
        {navLinks.map((link) => (
          <NavbarItem key={link.href} path={link.href}>{link.label}</NavbarItem>
        ))}
      </ul>

      {/* VIEW MOBILE */}
      <div className='ml-40 mt-1 flex md:hidden flex-col items-end '>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className='group flex items-center gap-2 rounded-full bg-background/20 px-4 py-2 text-sm font-medium text-foreground border border-foreground/20 ring-background shadow-[0_10px_11px_-5px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] '
        >
          {currentLabel}
          <svg viewBox="0 0 8 6" aria-hidden="true" className={`h-auto w-2 stroke-zinc-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* (Dropdown) */}
        {isOpen && (
          <>
            {/* Lớp phủ để bấm ra ngoài thì đóng menu */}
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
            
            <ul className='absolute top-px right-[-60] mt-[-2] w-90 overflow-hidden rounded-2xl border border-zinc-900/5 bg-white p-1 shadow-lg ring-1 ring-zinc-900/5 z-50 animate-in fade-in zoom-in-95 duration-200 '>
              <div className="relative text-base text-zinc-600 px-3 pt-3 pb-4">Navigation</div>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm transition-colors  ${
                      pathname === link.href ? 'text-teal-500 bg-zinc-50' : 'text-zinc-600 hover:bg-zinc-50 hover:text-teal-500 '
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </nav>
  );
}
