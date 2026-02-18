'use client';

import Image from 'next/image';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// --- 1. Bộ cung cấp Theme (Wrapper) ---
export function ThemeProvider({ children }: { children: React.ReactNode }) {
	return (
		<NextThemesProvider attribute='data-theme' defaultTheme='system' enableSystem>
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
		return <div className='h-10 w-10' />; // Khoảng trống giữ chỗ
	}

	return (
		<button
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className='flex h-10 w-12 items-center justify-center rounded-full border border-foreground/20 bg-background shadow-lg transition-transform hover:scale-110 dark:bg-background'
			aria-label='Toggle dark mode'
		>
			{theme === 'dark' ? (
				<Image src='/portifolio/Moon.svg' alt='Moon icon' width={24} height={24} />
			) : (
				<Image src='/portifolio/Sun.svg' alt='Sun icon' width={24} height={24} />
			)}
		</button>
	);
}
