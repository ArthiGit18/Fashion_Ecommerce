'use client';
import { useState } from 'react';

type Props = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch(value.trim()); // Trim whitespace before passing up
  };

  return (
    <div className="w-full flex justify-center">
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Try Saree, Kurti or Bags"
        className="border-2 border-gray-300 px-4 py-2 rounded-2xl w-72 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      />
    </div>
  );
}
