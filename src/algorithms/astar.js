// A* Algorithm
const heuristic = (pos1, pos2) => {
  return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
};

export const astar = (grid, startPos, endPos) => {
  const openSet = [startPos];
  const cameFrom = {};
  const gScore = Array(grid.length).fill(null).map(() => Array(grid[0].length).fill(Infinity));
  gScore[startPos[0]][startPos[1]] = 0;
  const fScore = Array(grid.length).fill(null).map(() => Array(grid[0].length).fill(Infinity));
  fScore[startPos[0]][startPos[1]] = heuristic(startPos, endPos);
  const visitedOrder = [];

  while (openSet.length > 0) {
    let current = null;
    let minFScore = Infinity;
    let minIndex = 0;

    for (let i = 0; i < openSet.length; i++) {
      const pos = openSet[i];
      const score = fScore[pos[0]][pos[1]];
      if (score < minFScore) {
        minFScore = score;
        current = pos;
        minIndex = i;
      }
    }

    if (current[0] === endPos[0] && current[1] === endPos[1]) {
      // Reconstruct path
      const path = [current];
      let node = current;
      const key = `${node[0]},${node[1]}`;
      while (cameFrom[key]) {
        node = cameFrom[key];
        path.unshift(node);
      }
      return { visitedOrder, path };
    }

    openSet.splice(minIndex, 1);
    visitedOrder.push(current);

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (const [dx, dy] of directions) {
      const newRow = current[0] + dx;
      const newCol = current[1] + dy;
      const newKey = `${newRow},${newCol}`;

      if (
        newRow >= 0 && newRow < grid.length &&
        newCol >= 0 && newCol < grid[0].length &&
        grid[newRow][newCol] !== 3
      ) {
        const tentativeGScore = gScore[current[0]][current[1]] + 1;

        if (tentativeGScore < gScore[newRow][newCol]) {
          cameFrom[newKey] = current;
          gScore[newRow][newCol] = tentativeGScore;
          fScore[newRow][newCol] = gScore[newRow][newCol] + heuristic([newRow, newCol], endPos);

          if (!openSet.some(p => p[0] === newRow && p[1] === newCol)) {
            openSet.push([newRow, newCol]);
          }
        }
      }
    }
  }

  return { visitedOrder, path: [] };
};
