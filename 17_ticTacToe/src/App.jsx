import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Board } from './Board';
import { calculateWinner } from './constants';

const TicTacToe = () => {
  const minBoardSize = 3;
  const [size, setSize] = useState(minBoardSize); // State to hold the size input by user
  const [board, setBoard] = useState(Array(size * size).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    setBoard(Array(size * size).fill(null)); // Reset board when size changes
  }, [size]);

  useEffect(() => {
    setWinner(calculateWinner(board, size));
  }, [board, size]);

  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setSize(newSize);
  };

  const handleClick = useCallback(
    (index) => {
      // if board is already filled at that specific index or winner is declared true, return undefined
      if (board[index] || winner) return;
      const newBoard = [...board];
      newBoard[index] = isXNext ? 'X' : 'O';
      setBoard(newBoard);
      setIsXNext(!isXNext);
    },
    [board, winner, isXNext]
  );

  const resetGame = useCallback(() => {
    setBoard(Array(size * size).fill(null));
    setIsXNext(true);
    setWinner(null);
  }, [size]);

  // Inline styles to set the CSS variable
  const gameContainerStyle = {
    '--board-size': size, // Dynamically set the CSS variable
  };

  return (
    <div className='game-container' style={gameContainerStyle}>
      <label htmlFor='boardSize'>Board size (3 or larger):</label>
      <input
        id='boardSize'
        type='number'
        min={minBoardSize}
        value={size}
        onChange={handleSizeChange}
      />
      <Board size={size} cells={board} onClick={handleClick} />
      {winner && <div className='winner-message'>Winner: {winner}</div>}
      <button className='reset-button' onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
