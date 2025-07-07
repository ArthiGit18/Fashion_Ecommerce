'use client';
import { useCart } from '@/components/CartContext';
import Image from 'next/image';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import NavBar from '@/components/NavBar';
import NavSub from '@/components/NavSub';
import Footer from '@/components/Footer';
export default function CartPage() {
    const { cartItems, removeFromCart, clearCart } = useCart();
    const [quantities, setQuantities] = useState<{ [key: number]: number }>(() => {
        const initial: { [key: number]: number } = {};
        cartItems.forEach((item) => {
            initial[item.id] = 1;
        });
        return initial;
    });
    const handleQuantityChange = (id: number, delta: number) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: Math.max(1, (prev[id] || 1) + delta),
        }));
    };
    const getProductTotal = (price: number, qty: number) => price * qty;
    const totalAmount = cartItems.reduce((acc, item) => {
        const qty = quantities[item.id] || 1;
        return acc + getProductTotal(item.price, qty);
    }, 0);
    const deliveryTotal = cartItems.reduce((acc, item) => {
        const fee = parseInt(item.deliveryFee.replace(/[^\d]/g, '')) || 0;
        return acc + fee;
    }, 0);
    return (
        <>
            <NavBar />
            <NavSub />
            <div className="w-full max-w-screen-xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
                {}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-6">My Cart</h2>
                    {cartItems.length === 0 ? (
                        <p className="text-gray-500">Your cart is empty.</p>
                    ) : (
                        cartItems.map((item) => {
                            const qty = quantities[item.id] || 1;
                            return (
                                <div
                                    key={item.id}
                                    className="flex flex-col sm:flex-row items-center sm:items-start justify-between border rounded-lg p-4 mb-4 shadow-sm"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-24 h-24 relative">
                                            <Image
                                                src={item.image.startsWith('/') ? item.image : `/images/${item.image}`}
                                                alt={item.title}
                                                fill
                                                className="object-cover rounded"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-md font-semibold text-gray-800">{item.title}</h3>
                                            <p className="text-sm text-gray-500">{item.category}</p>
                                            <p className="text-sm text-gray-600">Color: {item.color}</p>
                                            <p className="text-yellow-600 text-sm">⭐ {item.ratings}</p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <button
                                                    onClick={() => handleQuantityChange(item.id, -1)}
                                                    className="px-2 py-1 border rounded"
                                                >
                                                    -
                                                </button>
                                                <span>{qty}</span>
                                                <button
                                                    onClick={() => handleQuantityChange(item.id, 1)}
                                                    className="px-2 py-1 border rounded"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {}
                                    <div className="flex flex-col items-end gap-2 mt-4 sm:mt-0">
                                        <div className="text-right">
                                            <p className="text-sm text-gray-500">Price:</p>
                                            <p className="text-lg font-bold text-green-700">₹{item.price * qty}</p>
                                            <p className="text-xs text-gray-400">+ {item.deliveryFee} Delivery</p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 hover:text-red-700 text-sm flex items-center"
                                        >
                                            <DeleteIcon fontSize="small" className="mr-1" /> Remove
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
                {}
                {cartItems.length > 0 && (
                    <div className="w-full md:w-1/3 border rounded-lg p-6 shadow-sm h-fit">
                        <h3 className="text-xl font-bold mb-4">Price Summary</h3>
                        <div className="flex justify-between mb-2">
                            <span>Items ({cartItems.length})</span>
                            <span>₹{totalAmount}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Delivery Charges</span>
                            <span>₹{deliveryTotal}</span>
                        </div>
                        <hr className="my-3" />
                        <div className="flex justify-between text-lg font-semibold">
                            <span>Total</span>
                            <span>₹{totalAmount + deliveryTotal}</span>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={clearCart}
                                className="w-full border border-red-500 text-red-600 py-2 rounded hover:bg-red-50"
                            >
                                Clear Cart
                            </button>
                            <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}
