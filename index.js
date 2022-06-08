// function binarySearchIter(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start <= end) {
//     let middle = Math.round((start + end) / 2);

//     if (arr[middle] < target) {
//       start = middle + 1;
//     } else if (arr[middle] > target) {
//       end = middle - 1;
//     } else {
//       return middle
//     }
//   }
//   return -1
// };


function binarySearchRecur(arr, target, start = 0, end = arr.length) {

  let middle = Math.floor((start + end) / 2)


  if (end - start === 1 && target !== arr[middle] || arr.length === 0) {
    return -1
  }  else if (arr.length === 1) {
    return 0
  } else if (arr[middle] === target) {
    return middle
  } else if (arr[middle] < target) {
    return binarySearchRecur(arr, target, start = middle, end)
  } else if (arr[middle] > target) {
    return binarySearchRecur(arr, target, start, end = middle)
  } else {
    return middle;
  }
};


// let arrayNumb = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 32]
// let arrayStr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
// let empyArr = []
// let twoElarr = [1, 2]
// let oneElarr = [1]


// console.log(binarySearchRecur(arrayNumb, 1));
// console.log(binarySearchRecur(arrayNumb, 2));
// console.log(binarySearchRecur(arrayNumb, 3));
// console.log(binarySearchRecur(arrayNumb, 13));
// console.log(binarySearchRecur(arrayNumb, 14));
// console.log(binarySearchRecur(arrayNumb, 32));


// console.log(binarySearchRecur(arrayStr, 'A'));
// console.log(binarySearchRecur(arrayStr, 'B'));
// console.log(binarySearchRecur(arrayStr, 'D'));
// console.log(binarySearchRecur(arrayStr, 'H'));
// console.log(binarySearchRecur(arrayStr, 'I'));
// console.log(binarySearchRecur(arrayStr, 'P'));


// console.log(binarySearchRecur(oneElarr, 3));
// console.log(binarySearchRecur(oneElarr, 1));

// console.log(binarySearchRecur(twoElarr, 3));
// console.log(binarySearchRecur(twoElarr, 2));
// console.log(binarySearchRecur(twoElarr, 1));

// console.log(binarySearchRecur(empyArr, 3));

// binarySearchRecur(arrayNumb, 16);


module.exports = { binarySearchRecur }
