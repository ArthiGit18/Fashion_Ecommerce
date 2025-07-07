import './globals.css';
import { Providers } from './providers';
import type { ReactNode } from 'react';
import { ThemeProvider } from './ThemeContext';
import { SearchProvider } from '@/components/SearchContext';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <SearchProvider>
            <Providers>
              <NavBar />
              <main className="min-h-screen pt-24">
                {children}
              </main>
              <Footer />
            </Providers>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
