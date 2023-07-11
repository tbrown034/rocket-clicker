// App.jsx

import React from "react";
import Game from "./components/Game";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen gap-8 p-4 bg-blue-900 text-sky-50">
      <Header />
      <Game />
    </div>
  );
}
