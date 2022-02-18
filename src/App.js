import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Character from "./components/Character";

import "./App.css";

const App = () => {
  const [starWarsCharacters, setStarWarsCharacters] = useState();

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        console.log("keph", res.data);

        setStarWarsCharacters(res.data);
      })
      .catch(console.error);
  }, []);

  if (!starWarsCharacters) return <div>Loading...</div>;

  // 1. Build a React component named 'Character' to render an individual character.
  // 2. Map over the list in state, and for each character render a Character to the page.
  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {starWarsCharacters.map((eachCharacter) => (
        <Character key={eachCharacter.name} name={eachCharacter.name} />
      ))}
    </div>
  );
};

export default App;
