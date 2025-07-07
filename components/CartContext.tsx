'use client';
import { createContext, useContext, useState } from 'react';
import { Product } from './List';
export type CartContextType = {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    isInCart: (id: number) => boolean;
};
const CartContext = createContext<CartContextType | undefined>(undefined);
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('CartContext must be used within CartProvider');
    return context;
};
export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const addToCart = (product: Product) => {
        if (!cartItems.find(p => p.id === product.id)) {
            setCartItems(prev => [...prev, product]);
        }
    };
    const removeFromCart = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };
    const clearCart = () => {
        setCartItems([]);
    };
    const isInCart = (id: number) => {
        return cartItems.some((item) => item.id === id);
    };
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, isInCart }}>
            {children}
        </CartContext.Provider>
    );
}
