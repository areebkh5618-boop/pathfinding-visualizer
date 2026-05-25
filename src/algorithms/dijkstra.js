// Dijkstra's Algorithm
export const dijkstra = (grid, startPos, endPos) => {
  const distances = Array(grid.length).fill(null).map(() => Array(grid[0].length).fill(Infinity));
  distances[startPos[0]][startPos[1]] = 0;
  const visited = new Set();
  const visitedOrder = [];
  const previous = {};

  while (visited.size < grid.length * grid[0].length) {
    let current = null;
    let minDist = Infinity;

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        const key = `${i},${j}`;
        if (!visited.has(key) && distances[i][j] < minDist) {
          minDist = distances[i][j];
          current = [i, j];
        }
      }
    }

    if (!current || minDist === Infinity) break;

    const key = `${current[0]},${current[1]}`;
    visited.add(key);
    visitedOrder.push(current);

    if (current[0] === endPos[0] && current[1] === endPos[1]) {
      // Reconstruct path
      const path = [];
      let node = endPos;
      while (node) {
        path.unshift(node);
        const key = `${node[0]},${node[1]}`;
        node = previous[key];
      }
      return { visitedOrder, path };
    }

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (const [dx, dy] of directions) {
      const newRow = current[0] + dx;
      const newCol = current[1] + dy;
      const newKey = `${newRow},${newCol}`;

      if (
        newRow >= 0 && newRow < grid.length &&
        newCol >= 0 && newCol < grid[0].length &&
        grid[newRow][newCol] !== 3 &&
        !visited.has(newKey)
      ) {
        const newDist = distances[current[0]][current[1]] + 1;
        if (newDist < distances[newRow][newCol]) {
          distances[newRow][newCol] = newDist;
          previous[newKey] = current;
        }
      }
    }
  }

  return { visitedOrder, path: [] };
};
