import {useState } from "react";
import './App.css';
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResults';
import {SearchHistory} from './components/SearchHistory';


function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      
      <div className="search-bar-container">
        <h1 id="header">Dictionary</h1>
        <br/>
        <br/>

        <SearchBar setResults={setResults}/>
  
        <SearchResults results={results}/>
        <br/>
        <SearchHistory setResults={setResults}/>
        
      </div>
    </div>
  );
}

export default App;
