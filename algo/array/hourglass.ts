//https://www.hackerrank.com/challenges/2d-array/problem

const ARR = [
  [-9, 9, -9, 1, 1, 1],
  [0, 9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

const ARR2 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
function getHourGlassSum(ARR: number[][]) {
  let largestSum = Number.NEGATIVE_INFINITY;
  for (let row = 0; row < ARR.length; row++) {
    for (let col = 0; col < ARR[row].length; col++) {
      let tempRow = row;
      let sum = 0;

      if (col + 2 >= ARR[row].length || tempRow + 2 >= ARR.length) {
        break;
      }
      //check first ----
      sum += ARR[tempRow][col] + ARR[tempRow][col + 1] + ARR[tempRow][col + 2];

      //check middle x-x
      sum += ARR[tempRow + 1][col + 1];

      //check last
      sum +=
        ARR[tempRow + 2][col] +
        ARR[tempRow + 2][col + 1] +
        ARR[tempRow + 2][col + 2];

      if (sum > largestSum) {
        console.log("new sum", row, col, sum, "\n");
        largestSum = sum;
      }
    }
  }
  return largestSum;
}

const LARGEST_SUM = getHourGlassSum(ARR);
console.log(LARGEST_SUM);

const LARGEST_SUM2 = getHourGlassSum(ARR2);
console.log(LARGEST_SUM2);
