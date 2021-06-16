import React, { useState, useEffect } from "react";
import List from "./Components/List";
import SearchBar from "./Components/Navbar/SearchBar";
import md5 from "js-md5";
import { pubkey, pvtkey } from "./constants";
import CardDetails from "./Components/CardDetails";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const ts = Number(new Date());
    const hash = md5.create();
    hash.update(ts + pvtkey + pubkey);
    fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${pubkey}&hash=${hash.hex()}`
    )
      .then((response) => response.json())
      .then((json) => {
        setCharacters(json.data.results);
      });
  }, []);

  useEffect(() => {
    setFilteredCharacters(characters);
  }, [characters]);

  return (
    <div className="App">
      <SearchBar
        characters={characters}
        setFilteredCharacters={setFilteredCharacters}
      />
      <List
        filteredCharacters={filteredCharacters}
        setSelectedCharacter={setSelectedCharacter}
      />
      {selectedCharacter && (
        <CardDetails
          selectedCharacter={selectedCharacter}
          setSelectedCharacter={setSelectedCharacter}
        />
      )}
    </div>
  );
}

export default App;
