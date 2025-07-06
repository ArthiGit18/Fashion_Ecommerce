'use client';
import { useCart } from './CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';
import SearchBar from './SearchBar';
import Badge from '@mui/material/Badge';
import { useRouter } from 'next/navigation';

export default function NavBar() {
    const { cartItems } = useCart();
    const router = useRouter();

    return (
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4 py-4 flex items-center justify-between">
            <div className="text-xl font-bold">
                <h2>MyLogo</h2>
            </div>
            <SearchBar onSearch={() => { }} />
            <div className="flex items-center gap-6">
                <h3
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => router.push('/cart')}
                >
                    <Badge badgeContent={cartItems.length} color="primary">
                        <ShoppingCartIcon />
                    </Badge>
                    <span>Cart</span>
                </h3>
                <h3 className="flex items-center gap-1">
                    <Person2Icon />
                    <span>Profile</span>
                </h3>
            </div>
        </div>
    );
}
