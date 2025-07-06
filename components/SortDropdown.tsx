'use client';
import { useState } from 'react';

export default function SortDropdown() {
    const [sort, setSort] = useState('Relevance');

    const sortOptions = [
        'Relevance',
        'New Arrival',
        'Ratings',
        'Discount',
        'Price (Low to High)',
        'Price (High to Low)',
    ];

    return (
        <div className="my-4 text-gray-700">
            <label className="text-sm font-medium  text-gray-700 mr-2">Sort by:</label>
            <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border border-e-blue-900 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
            >
                {sortOptions.map((option, idx) => (
                    <option key={idx} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}
