import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const performSearch = (query) => {
        setSearchQuery(query);
        setIsSearching(true);
    };

    const clearSearch = () => {
        setSearchQuery('');
        setSearchResults([]);
        setIsSearching(false);
    };

    const updateSearchResults = (results) => {
        setSearchResults(results);
    };

    return (
        <SearchContext.Provider value={{
            searchQuery,
            searchResults,
            isSearching,
            performSearch,
            clearSearch,
            updateSearchResults
        }}>
            {children}
        </SearchContext.Provider>
    );
}

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};
