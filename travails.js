class KnightBoard {
    constructor(size) {
        this.size = size;
        this.moves = [
            [2, 1], [2, -1], [-2, 1], [-2, -1],
            [1, 2], [1, -2], [-1, 2], [-1, -2]
        ];
        this.board = this.buildGraph();
    }

    toKey([x, y]) {
        return `${x},${y}`;
    }

    isValid(x, y) {
        return x >= 0 && x < this.size && y >= 0 && y < this.size;
    }

    buildGraph() {
        const graph = {};
        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < this.size; y++) {
                const key = this.toKey([x, y]);
                graph[key] = [];

                for (const [dx, dy] of this.moves) {
                    const nx = x + dx;
                    const ny = y + dy;
                    if (this.isValid(nx, ny)) {
                        graph[key].push([nx, ny]);
                    }
                }
            }
        }
        return graph;
    }

    knightMoves(start, end) {
        if (!Array.isArray(start) || !Array.isArray(end) ||
            start.length !== 2 || end.length !== 2) {
            throw new Error("Start and end positions must be arrays of length 2");
        }
        const startKey = this.toKey(start);
        const endKey = this.toKey(end);

        if (!(startKey in this.board) || !(endKey in this.board))
            throw new Error("Invalid position(s).");

        if (startKey === endKey) {
            console.log("The Knight is already at the target location.");
            return;
        }

        const visited = new Set([startKey]);
        const queue = [{ pos: start, path: [start] }];

        while (queue.length > 0) {
            const { pos, path } = queue.shift();
            for (const next of this.board[this.toKey(pos)]) {
                const nextKey = this.toKey(next);
                if (visited.has(nextKey)) continue;
                visited.add(nextKey);

                if (nextKey === endKey) {
                    const shortestPath = [...path, next];
                    console.log(`You made it in ${shortestPath.length - 1} moves! Here's your path:`);
                    console.log(shortestPath);
                    return shortestPath;
                }

                queue.push({ pos: next, path: [...path, next] });
            }
        }

        return null;
    }
}

export { KnightBoard };