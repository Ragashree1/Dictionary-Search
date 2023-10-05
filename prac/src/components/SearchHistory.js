import React from 'react';
import { dictionary } from './SearchBar';
import'./SearchHistory.css'

export const SearchHistory = ({ setResults }) => {

    const handleResultClick = (result) => {
        setResults(dictionary[result]);
    };

    return (
        <div>
        <p>Previous Searches</p>
        <div className="overlay">
            {Object.keys(dictionary).map((key) => (
                <span key={key} onClick={() => handleResultClick(key)}>
                    {key + ' '}
                </span>
            ))}
        </div>
        </div>
    );
};
