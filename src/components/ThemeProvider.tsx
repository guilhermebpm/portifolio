'use client';

import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// --- 1. Bộ cung cấp Theme (Wrapper) ---
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="data-theme" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}

// --- 2. Nút bấm thay đổi Theme (Component) ---
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Đảm bảo chỉ render trên client để tránh lỗi Hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />; // Khoảng trống giữ chỗ
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center justify-center h-10 w-12 rounded-full border border-foreground/20 bg-background shadow-lg dark:bg-background transition-transform hover:scale-110"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <Image src="/moon.svg" alt="Moon icon" width={24} height={24} />
      ) : (
        <Image src="/sun.svg" alt="Sun icon" width={24} height={24} />
      )}
    </button>
  );
}