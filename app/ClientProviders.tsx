'use client';

import { ThemeProvider } from './ThemeContext';
import { SearchProvider } from '@/components/SearchContext';
import { ReactNode } from 'react';

export function ClientProviders({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <SearchProvider>
                {children}
            </SearchProvider>
        </ThemeProvider>
    );
}
