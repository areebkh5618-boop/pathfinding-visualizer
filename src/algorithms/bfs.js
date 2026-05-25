// Breadth-First Search Algorithm
export const bfs = (grid, startPos, endPos) => {
  const visited = new Set();
  const queue = [[startPos, [startPos]]];
  const visitedOrder = [];

  while (queue.length > 0) {
    const [current, path] = queue.shift();
    const key = `${current[0]},${current[1]}`;

    if (visited.has(key)) continue;
    visited.add(key);
    visitedOrder.push(current);

    if (current[0] === endPos[0] && current[1] === endPos[1]) {
      return { visitedOrder, path };
    }

    // 4 directions: up, down, left, right
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (const [dx, dy] of directions) {
      const newRow = current[0] + dx;
      const newCol = current[1] + dy;
      const newKey = `${newRow},${newCol}`;

      if (
        newRow >= 0 && newRow < grid.length &&
        newCol >= 0 && newCol < grid[0].length &&
        !visited.has(newKey) &&
        grid[newRow][newCol] !== 3
      ) {
        queue.push([[newRow, newCol], [...path, [newRow, newCol]]]);
      }
    }
  }

  return { visitedOrder, path: [] };
};
