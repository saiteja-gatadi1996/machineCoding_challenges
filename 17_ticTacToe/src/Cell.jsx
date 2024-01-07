export const Cell = ({ value, onClick }) => {
  return (
    <button className='game-cell' onClick={onClick}>
      {value}
    </button>
  );
};
