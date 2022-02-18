import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { handlers } from "./mocks/handlers";

const App = () => {
  const [data, setData] = useState();
  console.log("hello");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")

      .then((res) => {
        console.log(res.data);

        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {handlers.map((data) => {
        return (
          <article>
            <h2>{data.name}</h2>
            <p>{data.height}</p>
          </article>
        );
      })}
    </div>
  );
};

export default App;
