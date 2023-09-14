// const isUnique = array => {
//     let element = null;
//     for (let i = 0; i < array.length; i++) {
//         element = array[i];
//         for (let j = 0; j < array.length; j++) {
//             if ((i !== j) && (element === array[j])) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// const array = [1, 8, 4, 6, 2, 3, 9, 7, 34];
// console.log(isUnique(array));

const isUnique = array => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }
    return newArray.length === array.length;
}
const array = [1, 6, 8, 4, 3, 9, 4, 5, 7, 2, 1, 8];
console.log(isUnique(array));