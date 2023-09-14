const subs = (a, b) => {
    const array = [];
    for (let ele of b) {
        if (a.indexOf(ele) === -1) {
            array.push(ele);
        }
    }
    return array;
}
const a = [2, 6, 5 ,8, 1, 9];
const b = [1, 3, 2, 4, 7, 5];
console.log(subs(a, b));