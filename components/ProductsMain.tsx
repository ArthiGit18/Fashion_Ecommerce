'use client';
import { useMemo, useState, useEffect } from 'react';
import Filter from './Filter';
import List, { Product } from './List';
import { useSearch } from './SearchContext';
import rawProducts from '../data/Data.json';
const products: Product[] = rawProducts;
export default function ProductsMain() {
  const [filters, setFilters] = useState({
    category: [] as string[],
    gender: [] as string[],
    color: [] as string[],
    rating: [] as number[],
  });
  const { searchQuery, externalCategory } = useSearch();
  useEffect(() => {
    if (externalCategory) {
      setFilters((prev) => ({ ...prev, category: [externalCategory] }));
    }
  }, [externalCategory]);
  const filteredProducts: Product[] = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return products.filter(product => {
      const matchesCategory =
        filters.category.length === 0 || filters.category.includes(product.category);
      const matchesGender =
        filters.gender.length === 0 || filters.gender.includes(product.gender);
      const matchesColor =
        filters.color.length === 0 || filters.color.includes(product.color);
      const matchesRating =
        filters.rating.length === 0 || filters.rating.some(min => product.ratings >= min);
      const matchesSearch =
        query === '' ||
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.color.toLowerCase().includes(query) ||
        product.gender.toLowerCase().includes(query);
      return matchesCategory && matchesGender && matchesColor && matchesRating && matchesSearch;
    });
  }, [filters, searchQuery]);
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-4 pt-28">
      <div className="flex flex-col md:flex-row gap-4">
        {}
        <div className="w-full md:w-[230px]">
          <Filter onFilterChange={setFilters} />
        </div>
        {}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <p className="text-red-500">No products found for {searchQuery}</p>
          ) : (
            <div id="product-list" className="flex-1">
              <List products={filteredProducts} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
