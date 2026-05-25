// Grid utility functions

export const createEmptyGrid = (size) => {
  return Array(size).fill(null).map(() => Array(size).fill(0));
};

export const isValidCell = (grid, row, col) => {
  return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
};

export const isObstacle = (grid, row, col) => {
  return isValidCell(grid, row, col) && grid[row][col] === 3;
};

export const getNeighbors = (grid, row, col) => {
  const neighbors = [];
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  for (const [dx, dy] of directions) {
    const newRow = row + dx;
    const newCol = col + dy;
    if (isValidCell(grid, newRow, newCol) && !isObstacle(grid, newRow, newCol)) {
      neighbors.push([newRow, newCol]);
    }
  }

  return neighbors;
};

export const getManhattanDistance = (pos1, pos2) => {
  return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
};
