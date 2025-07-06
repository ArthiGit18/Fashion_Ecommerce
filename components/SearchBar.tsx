'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from './List';

type Props = {
  allProducts: Product[];
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch, allProducts }: Props) {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch(value.trim());

    const matches = allProducts.filter(p =>
      p.title.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(matches.slice(0, 5)); // Limit to 5 suggestions
    setShowDropdown(true);
  };

  const handleSelect = (id: number) => {
    setSearchText('');
    setShowDropdown(false);
    const element = document.getElementById(`product-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      router.push(`/product/${id}`);
    }
  };

  // Hide dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !(wrapperRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-xs" ref={wrapperRef}>
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Try Saree, Kurti or Bags"
        className="border-2 border-gray-300 px-4 py-2 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      />

      {showDropdown && suggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white dark:bg-zinc-900 border border-gray-200 rounded mt-1 z-100 shadow-lg">
          {suggestions.map((product) => (
            <li
              key={product.id}
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer"
              onClick={() => handleSelect(product.id)}
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
