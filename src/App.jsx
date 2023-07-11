import React from "react";
import Game from "./components/Game";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="p-4 min-h-screen gap-8 bg-blue-950 text-sky-50">
      <Header />
      <Game />
    </div>
  );
}
