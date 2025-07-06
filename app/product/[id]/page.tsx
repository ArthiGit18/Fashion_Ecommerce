'use client';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCart } from '@/components/CartContext';
import { Product } from '@/components/List';
import data from '@/data/Data.json';
import NavSub from '@/components/NavSub';
import NavBar from '@/components/NavBar';
export default function ProductDetail() {
    const { id } = useParams();
    const router = useRouter();
    const { addToCart, isInCart } = useCart();
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState<Product | null>(null);
    useEffect(() => {
        const productData = data.find(p => p.id === Number(id));
        setProduct(productData || null);
    }, [id]);
    const handleAddToCart = () => {
        if (product) {
            setLoading(true);
            setTimeout(() => {
                addToCart(product);
                setLoading(false);
            }, 1000);
        }
    };
    if (!product) return <p className="p-8">Product not found</p>;
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <NavBar />
            <NavSub />
            <div className="flex flex-col sm:flex-row gap-8">
                <img src={product.image} alt={product.title} className="w-full sm:w-1/2 h-auto object-cover rounded" />
                <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">{product.title}</h2>
                    <p className="text-gray-600">{product.category}</p>
                    <p className="text-gray-600">Color: {product.color}</p>
                    <p className="text-green-600 text-lg font-medium">
                        ₹{product.price} + {product.deliveryFee}
                    </p>
                    <p className="text-yellow-600">
                        ⭐ {product.ratings} <span className="text-gray-500">({product.reviews} reviews)</span>
                    </p>
                    <div className="pt-4">
                        {isInCart(product.id) ? (
                            <button
                                onClick={() => router.push('/cart')}
                                className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
                            >
                                Go to Cart
                            </button>
                        ) : (
                            <button
                                onClick={handleAddToCart}
                                disabled={loading}
                                className={`text-white px-6 py-2 rounded ${loading
                                    ? 'bg-gray-400 cursor-wait'
                                    : 'bg-green-600 hover:bg-green-700'
                                    }`}
                            >
                                {loading ? 'Adding...' : 'Add to Cart'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
