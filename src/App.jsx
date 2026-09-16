import { GameHeader } from "./components/GameHeader";

function App() {
  return (
    <div className="app">
      <GameHeader score={2} moves={3} />
    </div>
  );
}

export default App;
