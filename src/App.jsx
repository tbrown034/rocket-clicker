import React from "react";
import Game from "./components/Game";
import Header from "./components/Header";

function App() {
  return (
    <div className="App h-screen flex items-center justify-center bg-gray-800 text-white">
      <Header />
      <Game />
    </div>
  );
}

export default App;
