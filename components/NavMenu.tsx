'use client';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Navmenu from '../data/Navmenu.json';
import { useState, useEffect, useRef } from 'react';
import { useSearch } from './SearchContext';
export default function NavMenu() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const { setCategoryFilter } = useSearch();
    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);
    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 100);
    };
    const handleMouseEnter = (label: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveMenu(label);
    };
    const handleCategoryClick = (category: string) => {
        setCategoryFilter(category);
        const section = document.getElementById('product-list');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="relative z-50 group bg-indigo-300">
            <div className="w-full max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-center gap-8">
                <ul className="flex gap-6">
                    {Navmenu.map((item, index) => (
                        <li
                            key={index}
                            className="relative"
                            onMouseEnter={() =>
                                item.megaMenu ? handleMouseEnter(item.label) : setActiveMenu(null)
                            }
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="flex items-center text-md font-semibold text-indigo-950 hover:text-amber-50 cursor-pointer">
                                {item.label}
                                {item.megaMenu && <KeyboardArrowDownIcon fontSize="small" />}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            {}
            {Navmenu.map(
                (item, index) =>
                    item.megaMenu &&
                    activeMenu === item.label && (
                        <div
                            key={index}
                            className="absolute left-0 top-full w-screen bg-white shadow-md border-t border-gray-200"
                            onMouseEnter={() => handleMouseEnter(item.label)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="max-w-screen-xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                                {item.megaMenu.map((column, colIndex) => (
                                    <div key={colIndex}>
                                        <h4 className="text-md font-semibold text-purple-700 mb-2">
                                            {column.title}
                                        </h4>
                                        <ul className="space-y-1">
                                            {column.items.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <span
                                                        onClick={() => handleCategoryClick(subItem.name)}
                                                        className="text-sm text-gray-600 hover:text-black transition-colors cursor-pointer"
                                                    >
                                                        {subItem.name}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
            )}
        </div>
    );
}
