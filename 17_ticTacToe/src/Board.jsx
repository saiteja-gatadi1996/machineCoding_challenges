import {Cell} from './Cell';

export const Board = ({ size, cells, onClick }) => {
  const generateGrid = () => {
    let board = [];
    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        const index = i * size + j;
        row.push(
          <Cell
            key={index}
            value={cells[index]}
            onClick={() => onClick(index)}
          />
        );
      }
      board.push(
        <div key={i} className='board-row'>
          {row}
        </div>
      );
    }
    return board;
  };

  return <div className='game-board'>{generateGrid()}</div>;
};
