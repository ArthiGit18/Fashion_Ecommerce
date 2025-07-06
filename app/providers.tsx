'use client';

import { CartProvider } from '@/components/CartContext'; // Adjust path as needed
import type { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}
