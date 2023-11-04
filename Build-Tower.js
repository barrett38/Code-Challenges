// Build Tower

// Difficulty
// Medium
// Concepts
// Loops, Logic

// Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.
// The number passed in tells you how many floors the tower should have.
// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.
// Each block is represented by a *.
// For example, a tower of 3 floors looks like this (note the spacing):

function towerBuilder(nFloors) {
  let tower = [];
  let star = "*";
  let space = " ";
  for (let i = 1; i <= nFloors; i++) {
    tower.push(space.repeat(nFloors - i) + star.repeat(i * 2 - 1) + space.repeat(nFloors - i));
  }
  return tower;
}

const a = towerBuilder(3);
console.log(a);
