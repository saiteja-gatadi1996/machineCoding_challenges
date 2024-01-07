/* FOR ROWS */
// We use board.slice to get a subsection of the board array that represents a row.

// starts at i * n (the beginning of the row) and goes up to (i + 1) * n (the end of the row, non-inclusive).

// If allEqual returns true (meaning all marks in this row are the same and not null)

// -----------------------------------------------

/* FOR COLS */

// we create an array for a column using Array.from

//The length of the array is n, and we fill it using a mapping function.

// For each element at index j, we access the jth element of the ith column using board[i + j * n]

// -----------------------------------------------

// For diagonals, we don't need a loop because there are only two diagonals. We again use Array.from to create the arrays.

// For the first diagonal (top-left to bottom-right), we start at the top left (board[0]) and move n + 1 positions to get the next diagonal element.

// For the second diagonal (top-right to bottom-left), we start at the top right (board[n - 1]) and move n - 1 positions to get to the next diagonal element.

// However, since Array.from uses zero-based indexing, we use i * (n - 1) + (n - 1) to calculate the index correctly.

// -----------------------------------------------

export const calculateWinner = (board, n) => {
  // Helper function to check if all elements in an array are equal
  const allEqual = (arr) => arr.every((mark) => mark && mark === arr[0]);

  // Check rows and columns
  for (let i = 0; i < n; i++) {
    // Check row
    const row = board.slice(i * n, (i + 1) * n);
    if (allEqual(row)) return row[0];

    // Check column
    const column = Array.from({ length: n }, (_, j) => board[i + j * n]);
    if (allEqual(column)) return column[0];
  }

  // Check diagonals
  const diagonal1 = Array.from({ length: n }, (_, i) => board[i * (n + 1)]);
  if (allEqual(diagonal1)) return diagonal1[0];

  const diagonal2 = Array.from(
    { length: n },
    (_, i) => board[i * (n - 1) + (n - 1)]
  );
  if (allEqual(diagonal2)) return diagonal2[0];

  // No winner
  return null;
};
