import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa"
import "./SearchBar.css"



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
        fetchData(input); // Pass input value to fetchData
    };

    const fetchData = (input) => {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                console.log("API Respnse:", json);
                const results = json[0].meanings.map((meaning) => {
                    return {
                        definition: meaning.definitions[0].definition
                    };
                });
                setResults(json);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
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