'use client';
import { useCart } from '../../components/CartContext';

export default function CartPage() {
    const { cartItems } = useCart();

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cartItems.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-lg shadow-sm overflow-hidden flex flex-col"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 flex flex-col space-y-2">
                                <h3 className="font-semibold text-lg">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.category}</p>
                                <p className="text-sm">Color: {item.color}</p>
                                <p className="text-green-600 font-medium">
                                    ₹{item.price} + {item.deliveryFee}
                                </p>
                                <p className="text-sm text-yellow-600">
                                    ⭐ {item.ratings}{' '}
                                    <span className="text-gray-500">({item.reviews} reviews)</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
