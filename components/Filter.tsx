'use client';
import { useState, useEffect } from 'react';
import SortDropdown from "./SortDropdown";
import products from "../data/Data.json";

type Props = {
    onFilterChange: (filters: any) => void;
};

export default function Filter({ onFilterChange }: Props) {
    const [openSection, setOpenSection] = useState<string | null>(null);
    const [selectedFilters, setSelectedFilters] = useState({
        category: [] as string[],
        gender: [] as string[],
        color: [] as string[],
        rating: [] as number[],
    });

    const toggleSection = (section: string) => {
        setOpenSection(prev => (prev === section ? null : section));
    };

    const handleCheckboxChange = (type: string, value: string | number) => {
        setSelectedFilters(prev => {
            const current = prev[type as keyof typeof prev] as (string | number)[];
            const updated = current.includes(value)
                ? current.filter(v => v !== value)
                : [...current, value];

            return { ...prev, [type]: updated };
        });
    };

    useEffect(() => {
        onFilterChange(selectedFilters);
    }, [selectedFilters, onFilterChange]);

    const getUniqueValues = (key: keyof typeof products[0]) => {
        return [...new Set(products.map(product => product[key]))];
    };

    return (
        <div className="bg-indigo-100 rounded-xl px-4 py-8 w-full">
            <h3 className="font-bold text-2xl mb-2 text-blue-950">Products For You</h3>
            <SortDropdown />
            <h3 className="font-bold mt-6 text-gray-700">Filters</h3>
            <p className="text-sm text-gray-600 py-2">1000+ products</p>
            <hr className="mb-4 text-gray-700" />

            {['category', 'gender', 'color', 'rating'].map(label => (
                <div key={label} className="mb-4">
                    <div
                        className="flex justify-between items-center cursor-pointer font-medium text-gray-700 hover:text-black"
                        onClick={() => toggleSection(label)}
                    >
                        <span className="capitalize">{label}</span>
                        <span>{openSection === label ? '▲' : '▼'}</span>
                    </div>

                    {openSection === label && (
                        <ul className="mt-2 ml-1 space-y-1 text-sm text-gray-800">
                            {label === 'rating' ? (
                                [2, 3, 4].map((rating) => (
                                    <li key={rating}>
                                        <label className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                className="accent-purple-600"
                                                onChange={() => handleCheckboxChange('rating', rating)}
                                            />
                                            {rating} and above
                                        </label>
                                    </li>
                                ))
                            ) : (
                                getUniqueValues(label as keyof typeof products[0]).map((item, i) => (
                                    <li key={i}>
                                        <label className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                className="accent-purple-600"
                                                onChange={() => handleCheckboxChange(label, item)}
                                            />
                                            {item}
                                        </label>
                                    </li>
                                ))
                            )}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}
