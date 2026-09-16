export const GameHeader = () => {
  return (
    <div className="game-header">
      <h1>Memory Card Game</h1>
      <div className="stat">
        <div className="stat-item">
          <span className="stat-label">Score:</span>{" "}
          <span className="stat-value">0</span>
        </div>
        <div className="stat-name">Moves: 0</div>
      </div>
    </div>
  );
};
