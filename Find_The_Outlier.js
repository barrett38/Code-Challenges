// You are given an array (which will have a length of at least 3,
// but could be very large) containing integers.
// The array is either entirely comprised of odd integers or
// entirely comprised of even integers except for a single integer N.
// Write a function that takes the array as an argument and returns this “outlier” N.

// Examples:
// [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)

const arr = [2, 4, 0, 100, 4, 11, 2602, 36];
const arr2 = [160, 3, 1719, 19, 11, 13, -21];
const arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function findOutlier(int) {
  let even = [];
  let odd = [];
  int.forEach(n => {
    n % 2 === 0 ? even.push(n) : odd.push(n);
  });
  return even.length === 1 ? even[0] : odd[0];
}

console.log(findOutlier(arr));
console.log(findOutlier(arr2));
console.log(findOutlier(arr3));
