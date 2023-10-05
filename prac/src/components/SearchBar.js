import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import "./SearchBar.css"

export let dictionary = JSON.parse(sessionStorage.getItem('dictionary')) || {};

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState('');

    const handleChange = (value) => {
        setInput(value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearch = () => {
        if (input in dictionary) {
            setResults(dictionary[input]);
        } else {
            fetchData(input);
        }
        setInput('');
    };

    const fetchData = (input) => {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                if(json.length > 0){
                    setResults(json);
                    dictionary[input] = json;
                }else{
                    setResults("")
                }
                sessionStorage.setItem('dictionary', JSON.stringify(dictionary))
                
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                
            });
    };

    return (
        <div className='input-wrapper'>
            <FaSearch id='search-icon' onClick={handleSearch} />
            <input
                placeholder='Enter Search Word'
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default SearchBar;
