import { GameHeader } from "./components/GameHeader";

const cardValues = [
 ☯,
 🥋,
 🥊,
 🥷🏻,
 ⛩️,
 🤼,
 💪,
 🏅,
 ☯,
 🥋,
 🥊,
 🥷🏻,
 ⛩️,
 🤼,
 💪,
 🏅
];

function App() {
  return (
    <div className="app">
      <GameHeader score={2} moves={3} />
      <div className="cards-grid"></div>
    </div>
  );
}

export default App;
