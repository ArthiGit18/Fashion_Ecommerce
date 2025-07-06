'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from './List';

type CartContextType = {
    cartItems: Product[];
    addToCart: (product: Product) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('CartContext must be used within CartProvider');
    return context;
};

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCartItems((prev) => [...prev, product]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}
