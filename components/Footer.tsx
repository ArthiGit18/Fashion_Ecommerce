'use client';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 pt-10 pb-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and About */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">MyLogo</h2>
                    <p className="text-sm text-gray-400">
                        Elevate your lifestyle with top-quality products. We bring the best to your doorstep.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-white transition">Home</a></li>
                        <li><a href="/shop" className="hover:text-white transition">Shop</a></li>
                        <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                        <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* Contact + Social */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
                    <p className="text-sm text-gray-400 mb-2">Email: support@myshop.com</p>
                    <p className="text-sm text-gray-400 mb-4">Phone: +91 98765 43210</p>

                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white"><FacebookIcon /></a>
                        <a href="#" className="hover:text-white"><TwitterIcon /></a>
                        <a href="#" className="hover:text-white"><InstagramIcon /></a>
                        <a href="#" className="hover:text-white"><LinkedInIcon /></a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
                &copy; {new Date().getFullYear()} MyLogo. All rights reserved.
            </div>
        </footer>
    );
}
