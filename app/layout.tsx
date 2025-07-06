import './globals.css';
import { Providers } from './providers';
import type { ReactNode } from 'react';
import { ThemeProvider } from './ThemeContext';
import { SearchProvider } from '@/components/SearchContext';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <SearchProvider>
            <Providers>
              {children}
            </Providers>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
