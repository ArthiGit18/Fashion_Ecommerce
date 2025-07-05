'use client';
import { useState } from 'react';

type Product = {
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

  const showMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleProducts.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-1">
              <h3 className="text-md font-semibold text-gray-800">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-sm text-gray-600">Color: {product.color}</p>
              <p className="text-sm text-green-600 font-medium">₹{product.price} + {product.deliveryFee}</p>
              <p className="text-sm text-yellow-600">
                ⭐ {product.ratings} <span className="text-gray-500">({product.reviews} reviews)</span>
              </p>
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
