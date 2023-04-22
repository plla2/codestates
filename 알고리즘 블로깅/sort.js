// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     let swap;
//     for (let j = 0; j < array.length - 1 - i; j++) {
//       if (array[j] > array[j + 1]) {
//         swap = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = swap;
//       }
//     }
//     console.log(`${i}회전: ${array}`);
//     if (!swap) {
//       break;
//     }
//   }
//   return array;
// }
// console.log(bubbleSort([5, 4, 3, 2, 1]));


// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let cur = arr[i];
//     let left = i - 1;

//     while (left >= 0 && arr[left] > cur) {
//       arr[left + 1] = arr[left];
//       arr[left] = cur;
//       cur = arr[left];
//       left--;
//     }
//   }
//   return arr;
// }

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let cur = arr[i];
//     let left = i - 1;

//     while (left >= 0 && arr[left] > cur) {
//       arr[left + 1] = arr[left];
//       console.log(arr);
//       left--;
//     }
//     arr[left + 1] = cur;
//     // console.log(`${i}회전: ${arr}`);
//   }
//   return arr;
// }
// console.log(insertionSort([5, 4, 3, 2, 1]))

function bubbleSort(arr) {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 1; y < arr.length - x; y++) {
      if (arr[y - 1] > arr[y]) {
        [arr[y - 1], arr[y]] = [arr[y], arr[y - 1]];
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  let indexMin;
  for (let x = 0; x < arr.length - 1; x++) {
    indexMin = x;
    for (let y = x + 1; y < arr.length; y++) {
      if (arr[y] < arr[indexMin]) {
        indexMin = y;
      }
    }
    [arr[x], arr[indexMin]] = [arr[indexMin], arr[x]];
  }
  return arr;
}

function insertionSort(arr) {
  for (let x = 1; x < arr.length; x++) {
    let value = arr[x];
    let prev = x - 1;
    while (prev >= 0 && arr[prev] > value) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = value;
  }

  return arr;
}

function quickSort(arr, left, right) {
  if (left >= right) {
    return;
  }

  /* 개선 방법
  const mid = (left + right) / 2;
  [arr[left], arr[mid]] = [arr[mid], arr[left]];
  */

  let pivot = arr[left];
  let x = left;
  let y = right;

  while (x < y) {
    while (pivot < arr[y]) {
      y--;
    }
    while (x < y && pivot >= arr[x]) {
      x++;
    }
    [arr[x], arr[y]] = [arr[y], arr[x]];
  }

  arr[left] = arr[x];
  arr[x] = pivot;

  quickSort(arr, left, x - 1);
  quickSort(arr, x + 1, right);

  return arr;
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  let l = 0;
  let r = 0;

  while (l < leftArr.length && r < rightArr.length) {
    if (leftArr[l] <= rightArr[r]) {
      sortedArr.push(leftArr[l]);
      l++;
    } else {
      sortedArr.push(rightArr[r]);
      r++;
    }
  }

  while (l < leftArr.length) {
    sortedArr.push(leftArr[l]);
    l++;
  }

  while (r < rightArr.length) {
    sortedArr.push(rightArr[r]);
    r++;
  }

  return sortedArr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const mid = Math.ceil(arr.length / 2);

  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}