
// flat
const array = [1, 2, 5, 8, 7, 6, 3, [1, 3, 5, 4, [1, 5, 7, 8]]];
console.log(array.flat(3));  // lines to see

// flatmap
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(v => [v, v * 2])); // Method for transform any algorithmic
