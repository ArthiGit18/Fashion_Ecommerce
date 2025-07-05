'use client';
import { useState, useMemo } from 'react';
import Filter from './Filter';
import List from './List';
import products from '../data/Data.json';

export default function ProductsMain() {
    const [filters, setFilters] = useState({
        category: [] as string[],
        gender: [] as string[],
        color: [] as string[],
        rating: [] as number[],
    });

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesCategory =
                filters.category.length === 0 || filters.category.includes(product.category);
            const matchesGender =
                filters.gender.length === 0 || filters.gender.includes(product.gender);
            const matchesColor =
                filters.color.length === 0 || filters.color.includes(product.color);
            const matchesRating =
                filters.rating.length === 0 ||
                filters.rating.some(min => product.ratings >= min);

            return matchesCategory && matchesGender && matchesColor && matchesRating;
        });
    }, [filters]);

    return (
        <div className="w-full max-w-screen-xl mx-auto px-4 py-4 flex gap-8">
            <div className="w-[220px]">
                <Filter onFilterChange={setFilters} />
            </div>
            <div className="flex-1">
                <List products={filteredProducts} />
            </div>
        </div>
    );
}
