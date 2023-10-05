import React, { useState } from 'react';
import './SearchResults.css';


export function SearchResults({ results }) {
    const [showAllDefinitions, setShowAllDefinitions] = useState(false);

    if (!results || results.length === 0 || !results[0].word) {
        return <div></div>;
    }

    return (
        
        <div id="overall">
        <div id="main" className="results-list">
            {showAllDefinitions
                ? results.map((result, id) => (
                      <div key={id}>
                          <div className="word">{id + 1}. {result.word}</div>
                          <div className="phonetic">{result.phonetic}</div>
                          {result.meanings.map((meaning, idx) => (
                              <div key={idx}>
                                  <div className="part-of-speech">{meaning.partOfSpeech}</div>
                                  <div className="definition">{meaning.definitions[0].definition}</div>
                                  <div className="example">
                                      {meaning.definitions[0].example ? `"${meaning.definitions[0].example}"` : null}
                                  </div>
                              </div>
                          ))}
                          <br/>
                          <hr/>
                          <br/>
                      </div>
                  ))
                : (
                    <div key="1">
                        <div className="word">{results[0].word}</div>
                        <div className="phonetic">{results[0].phonetic}</div>
                        {results[0].meanings.map((meaning, idx) => (
                            <div key={idx}>
                                <div className="part-of-speech">{meaning.partOfSpeech}</div>
                                <div className="definition">{meaning.definitions[0].definition}</div>
                                <div className="example">
                                    {meaning.definitions[0].example ? `"${meaning.definitions[0].example}"` : null}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
        </div>
        <div id="morediv"  >
            {!showAllDefinitions && results.length > 1 && (
                <button id='mr' className='show-more-button' onClick={() => setShowAllDefinitions(true)}>All Definitions</button>
            )}
            
        </div>
        <div id="lessdiv" > 
            {showAllDefinitions && results.length > 1 && (
                    <button id='ls' className='show-less-button' onClick={() => setShowAllDefinitions(false)}>Less</button>
                )}
        </div>
        </div>
    );
};

export default SearchResults;
