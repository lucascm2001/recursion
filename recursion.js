function fibs(n) {
  const arr = [0, 1];
  for (let i = 2; i < n; i += 1) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

function fibsRec(n, arr) {
  if (n === 2) return arr;
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return fibsRec(n - 1, arr);
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const left = arr.slice(0, Math.floor(arr.length / 2));
  const right = arr.slice(Math.floor(arr.length / 2));

  // sort left half, sort right half, merge
  const mergedLeft = mergeSort(left);
  const mergedRight = mergeSort(right);

  // merge both
  let retArr = [];
  let leftPointer = 0;
  let rightPointer = 0;
  const len = mergedLeft.length + mergedRight.length;

  while (retArr.length < len) {
    if (leftPointer === mergedLeft.length) {
      retArr = retArr.concat(mergedRight.slice(rightPointer));
    } else if (rightPointer === mergedRight.length) {
      retArr = retArr.concat(mergedLeft.slice(leftPointer));
    } else if (mergedLeft[leftPointer] <= mergedRight[rightPointer]) {
      retArr.push(mergedLeft[leftPointer]);
      leftPointer += 1;
    } else {
      retArr.push(mergedRight[rightPointer]);
      rightPointer += 1;
    }
  }

  return retArr;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
