'use client';
import { ReactNode } from 'react';
import { ThemeProvider } from './ThemeContext';
import { SearchProvider } from '@/components/SearchContext';
import { CartProvider } from '@/components/CartContext';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <SearchProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </SearchProvider>
    </ThemeProvider>
  );
}
