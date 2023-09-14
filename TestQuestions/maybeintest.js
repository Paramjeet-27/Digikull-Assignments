// Sum of first n Natural Numbers
const sum = n => {
    let sum = 0;
    for (let i= 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sum(9));
