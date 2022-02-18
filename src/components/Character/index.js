import React, { useState } from "react";

import * as s from "./styles";

const Character = (props) => {
  const [turnRed, setTurnRed] = useState(false);
  const toggleTurnRed = () => setTurnRed((prev) => !prev);

  // 3. Each rendered character must display its name in the DOM (e.g. "Luke Skywalker").
  return (
    <s.Character
      className="character"
      backgroundRed={turnRed}
      onClick={toggleTurnRed}
    >
      <div>{props.name}</div>
    </s.Character>
  );
};

export default Character;
