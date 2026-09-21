import { GameHeader } from "./components/GameHeader";
import { useEffect, useState } from "react";
import { card } from "./components/Card";

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
    //Shuffle cards

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

  const handleCardClick = (card) => {
    // If card is already flipped and/or matched then you can't click again.
    if (card.isFlipped) || (card.isMatched) {
      return;
    }

    // Update card flipped state.
    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, isFlipped: true };
      } else {
        return c;
      }
    });

    setCards(newCards);
  };

  return (
    <div className="app">
      <GameHeader score={2} moves={3} />
      <div className="cards-grid">
        {cards.map((card) => (
          <card card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
