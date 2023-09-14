const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = array.filter(i => i % 2 !== 0);

const divisible = array.filter(j => (j % 2 === 0) || (j % 5 === 0));

const multiply = array.filter(k => k % 3 === 0).map(k => k ** 2);

const square = array.filter(l => l % 5 === 0).map(l => l ** 2).reduce((m, n) => m + n);

console.log(oddNumbers);
console.log(divisible);
console.log(multiply);
console.log(square);