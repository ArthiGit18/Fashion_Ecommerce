'use client';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Navmenu from '../data/Navmenu.json';
import { useState, useEffect, useRef } from 'react';

export default function NavMenu() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Clear timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    // Helper to handle delayed closing
    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 100); // 100ms delay
    };

    const handleMouseEnter = (label: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveMenu(label);
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
                            <a
                                href={item.link}
                                className="flex items-center text-md font-semibold text-indigo-950 hover:text-amber-50"
                            >
                                {item.label}
                                {item.megaMenu && <KeyboardArrowDownIcon fontSize="small" />}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Full-width dropdown OUTSIDE ul */}
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
                                                    <a
                                                        href={subItem.link}
                                                        className="text-sm text-gray-600 hover:text-black transition-colors"
                                                    >
                                                        {subItem.name}
                                                    </a>
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
