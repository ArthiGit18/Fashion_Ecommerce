'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from './CartContext';

export type Product = {
    id: number;
    title: string;
    gender: string;
    color: string;
    price: number;
    deliveryFee: string;
    ratings: number;
    reviews: number;
    category: string;
    image: string;
};

export default function List({ products }: { products: Product[] }) {
    const [visibleCount, setVisibleCount] = useState(9);
    const [loadingId, setLoadingId] = useState<number | null>(null);
    const [loadingViewId, setLoadingViewId] = useState<number | null>(null);

    const { addToCart, isInCart } = useCart();
    const router = useRouter();

    const showMore = () => setVisibleCount((prev) => prev + 3);
    const visibleProducts = products.slice(0, visibleCount);

    const handleAddToCart = (product: Product) => {
        setLoadingId(product.id);
        setTimeout(() => {
            addToCart(product);
            setLoadingId(null);
        }, 1000);
    };

    const handleView = (productId: number) => {
        setLoadingViewId(productId);
        setTimeout(() => {
            router.push(`/product/${productId}`);
        }, 1000);
    };

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {visibleProducts.map((product) => (
                    <div id={`product-${product.id}`} key={product.id} className="border rounded-lg shadow-sm overflow-hidden flex flex-col">
                        <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                        <div className="p-4 flex flex-col justify-between flex-1 space-y-2">
                            <div>
                                <h3 className="text-md font-semibold">{product.title}</h3>
                                <p className="text-sm">{product.category}</p>
                                <p className="text-sm">Color: {product.color}</p>
                                <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                                    ₹{product.price} + {product.deliveryFee}
                                </p>
                                <p className="text-sm text-yellow-600">
                                    ⭐ {product.ratings}{' '}
                                    <span className="text-gray-500">({product.reviews} reviews)</span>
                                </p>
                            </div>

                            <div className="flex gap-2 pt-2">
                                <button
                                    onClick={() => handleView(product.id)}
                                    disabled={loadingViewId === product.id}
                                    className={`flex-1 py-2 px-4 rounded text-sm text-white ${loadingViewId === product.id
                                        ? 'bg-gray-400 cursor-wait'
                                        : 'bg-indigo-600 hover:bg-indigo-700'
                                        }`}
                                >
                                    {loadingViewId === product.id ? 'Loading...' : 'View'}
                                </button>

                                {isInCart(product.id) ? (
                                    <button
                                        onClick={() => router.push('/cart')}
                                        className="flex-1 bg-purple-600 text-white py-2 px-4 rounded text-sm"
                                    >
                                        Go to Cart
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        disabled={loadingId === product.id}
                                        className={`flex-1 text-white py-2 px-4 rounded text-sm ${loadingId === product.id
                                            ? 'bg-gray-400 cursor-wait'
                                            : 'bg-green-600 hover:bg-green-700'
                                            }`}
                                    >
                                        {loadingId === product.id ? 'Adding...' : 'Add to Cart'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {visibleCount < products.length && (
                <div className="flex justify-center mt-6">
                    <button
                        onClick={showMore}
                        className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
                    >
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
}
