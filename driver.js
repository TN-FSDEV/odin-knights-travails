import { KnightBoard } from "./travails.js";
const knightBoard = new KnightBoard(8);

// Test cases
console.log("\nTest Case 1: Simple move");
knightBoard.knightMoves([3, 3], [4, 3]);

console.log("\nTest Case 2: Longer path");
knightBoard.knightMoves([0, 0], [7, 7]);

console.log("\nTest Case 3: Same position");
knightBoard.knightMoves([0, 0], [0, 0]);

// Test error cases
console.log("\nTest Case 4: Invalid input handling");
try {
    knightBoard.knightMoves([8, 8], [0, 0]);
} catch (error) {
    console.log("Error caught successfully:", error.message);
}

try {
    knightBoard.knightMoves([1], [0, 0]);
} catch (error) {
    console.log("Error caught successfully:", error.message);
} 