'use client';
import { useSearch } from './SearchContext';
import { useCart } from './CartContext';
import { useTheme } from '../app/ThemeContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';
import SearchBar from './SearchBar';
import Badge from '@mui/material/Badge';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import rawProducts from '../data/Data.json';
import NavMenu from './NavMenu';

const allProducts = rawProducts;

export default function NavBar() {
    const { cartItems } = useCart();
    const router = useRouter();
    const { theme, toggleTheme } = useTheme();
    const [isCartLoading, setIsCartLoading] = useState(false);
    const [isProfileLoading, setIsProfileLoading] = useState(false);
    const { searchQuery, setSearchQuery } = useSearch();

    const handleCartClick = () => {
        setIsCartLoading(true);
        setTimeout(() => {
            setIsCartLoading(false);
            router.push('/cart');
        }, 2000);
    };

    const handleProfileClick = () => {
        setIsProfileLoading(true);
        setTimeout(() => {
            setIsProfileLoading(false);
            router.push('/profile');
        }, 2000);
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-[var(--background)] text-[var(--foreground)] shadow-md">
            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4 py-4 flex items-center justify-between">
                <a href="/" className="text-xl font-bold">
                    <img
                        src={theme === 'dark' ? '/images/logo/fox (3).png' : '/images/logo/fox (2).png'}
                        alt="logo"
                        className="h-20 w-30 object-contain"
                    />
                </a>

                <SearchBar allProducts={allProducts} onSearch={setSearchQuery} />

                <div className="flex items-center gap-6">
                    <h3
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={handleCartClick}
                    >
                        <Badge badgeContent={cartItems.length} color="primary">
                            {isCartLoading ? (
                                <div className="animate-spin w-5 h-5 border-2 border-t-transparent rounded-full border-blue-600"></div>
                            ) : (
                                <ShoppingCartIcon />
                            )}
                        </Badge>
                        <span>{isCartLoading ? 'Loading...' : 'Cart'}</span>
                    </h3>

                    <h3
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={handleProfileClick}
                    >
                        {isProfileLoading ? (
                            <div className="animate-spin w-5 h-5 border-2 border-t-transparent rounded-full border-green-500"></div>
                        ) : (
                            <Person2Icon />
                        )}
                        <span>{isProfileLoading ? 'Loading...' : 'Profile'}</span>
                    </h3>

                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-1 border px-3 py-1 rounded text-sm transition hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                        {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        {theme === 'dark' ? 'Light' : 'Dark'}
                    </button>
                </div>
            </div>

            <NavMenu />
        </div>
    );
}
