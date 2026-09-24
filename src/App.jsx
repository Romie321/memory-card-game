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
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMattchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useMoves(0);

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
    if (card.isFlipped || card.isMatched) {
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

    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    // Check for match when two cards are flipped.
    if (flippedCards.length === 1) {
      const firstCard = cards[flippedCards[0]];

      if (firstCard.value === card.value) {
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
          setScore((prev) => prev + 1);

          setCards((prev) =>
            prev.map((c) => {
              if (c.id === card.id || c.id === firstCard.id) {
                return { ...c, isMatched: true };
              } else {
                return c;
              }
            }),
          );

          setFlippedCards([]);
        }, 400);
      } else {
        // Flip cards back when they don't match.
        setTimeout(() => {
          const flippedBackCards = newCards.map((c) => {
            if (newFlippedCards.includes(c.id) || c.id === card.id) {
              return { ...c, isFlipped: false };
            } else {
              return c;
            }
          });
          setCards(flippedBackCards);
          setFlippedCards([]);
        }, 1000);
      }
      setMoves((prev) => prev + 1);
    }
  };

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />
      <div className="cards-grid">
        {cards.map((card) => (
          <card card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
