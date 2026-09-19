import { GameHeader } from "./components/GameHeader";
import { useEffect, useState } from "react";

const cardValues = [
  "☯",
  "🥋",
  "🥊",
  "🥷🏻",
  "⛩️",
  "🤼",
  "💪",
  "🏅",
  "☯",
  "🥋",
  "🥊",
  "🥷🏻",
  "⛩️",
  "🤼",
  "💪",
  "🏅",
];

function App() {
  const [cards, setCards] = useState([]);

  const initializeGame = () => {
    //shuffle cards

    const finalCards = cardValues.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(finalCards);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <div className="app">
      <GameHeader score={2} moves={3} />
      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
