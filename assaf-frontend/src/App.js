import { useState } from "react";
import NavbarSide from "./components/NavbarSide/NavbarSide";
import Board from "./components/Board/Board";

import "./App.css";

function App() {
  const [diceNumber, setDiceNumber] = useState();
  const [isStarted, setIsStarted] = useState(false);

  const takeDiceNumber = (number) => {
    setDiceNumber(number);
  }
  const getStarted = (boolean) => {
    setIsStarted(boolean)

  }

  return (
    <div className="container">
      <NavbarSide onDiceNumber={takeDiceNumber} onStarted={getStarted} />
      <Board onBoardNumber={diceNumber} onBoardStart={isStarted} />
    </div>

  );
}

export default App;

// to start the dice component server go to the assaf-media-project in the terminal and press: "http-server ./"
// to start the server go to assaf-backend press: "node app.js"
// to start react go to assaf-media-project press: "npm start"
