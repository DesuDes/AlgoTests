const ARRAY = [1, 2, 3];
const ARRAY2 = ["a", "b", "c", "d", "e"];
const ARRAY3 = ["z", "e", "r", "i"];

function rotate<T>(array: T[], rotateCount: number = 1) {
  let temp: T | undefined = undefined;
  console.log({ before: array }, `Rotate array ${rotateCount} times.`);
  for (let x = 0; x < rotateCount; x++)
    for (let i = 0; i < array.length; i++) {
      if (i == 0) {
        temp = array[i + 1];
        array[i + 1] = array[i];
        i++;
      } else if (i == array.length - 1) {
        array[0] = array[i];
        if (temp != undefined) array[i] = temp;
      } else {
        let temp2: T | undefined = array[i];
        if (temp != undefined) {
          array[i] = temp;
          temp = temp2;
        }
      }
    }
  console.log({ done: array }, "\n");
}

rotate<number>(ARRAY, 2);
rotate<string>(ARRAY2, 3);
rotate<string>(ARRAY3, 6);
