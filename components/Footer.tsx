'use client';
import Link from 'next/link';
import { useTheme } from '../app/ThemeContext';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
    const { theme } = useTheme();
    return (
        <footer className="pt-10 pb-6 px-4 sm:px-6 lg:px-8 border-t-2 bg-[var(--background)] text-[var(--foreground)]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {}
                <div>
                    <img
                        src={theme === 'dark' ? '/images/logo/fox (3).png' : '/images/logo/fox (2).png'}
                        alt="logo"
                        className="h-20 w-auto object-contain mb-2"
                    />
                    <p className="text-sm">
                        Elevate your lifestyle with top-quality products. We bring the best to your doorstep.
                    </p>
                </div>
                {}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/" className="hover:text-white transition">Home</Link>
                        </li>
                        <li>
                            <Link href="/shop" className="hover:text-white transition">Shop</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-white transition">Contact</Link>
                        </li>
                    </ul>
                </div>
                {}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                    <p className="text-sm mb-2">Email: support@myshop.com</p>
                    <p className="text-sm mb-4">Phone: +91 98765 43210</p>
                    <div className="flex gap-4">
                        <Link href="#"><FacebookIcon /></Link>
                        <Link href="#"><TwitterIcon /></Link>
                        <Link href="#"><InstagramIcon /></Link>
                        <Link href="#"><LinkedInIcon /></Link>
                    </div>
                </div>
            </div>
            {}
            <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
                &copy; {new Date().getFullYear()} MyLogo. All rights reserved.
            </div>
        </footer>
    );
}
