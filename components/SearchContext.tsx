'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
type SearchContextType = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    setCategoryFilter: (category: string) => void;
    externalCategory: string;
};
const SearchContext = createContext<SearchContextType | undefined>(undefined);
export const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [externalCategory, setExternalCategory] = useState('');
    const setCategoryFilter = (category: string) => {
        setExternalCategory(category);
    };
    return (
        <SearchContext.Provider
            value={{ searchQuery, setSearchQuery, externalCategory, setCategoryFilter }}
        >
            {children}
        </SearchContext.Provider>
    );
};
export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) throw new Error('useSearch must be used within SearchProvider');
    return context;
};
