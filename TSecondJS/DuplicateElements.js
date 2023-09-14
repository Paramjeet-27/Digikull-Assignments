const duplicates = array => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if ((i !== j) && (array[i] === array[j]) && (i < j) && (newArray.indexOf(array[i]) === -1)) {
                newArray.push(array[i]);
            }
            else {
                newArray.push();
            }
        }
    }
    return newArray;
}
const array = [1, 6, 8, 4, 3, 9, 4, 5, 8, 7, 1, 2, 6, 8, 1, 4, 1];
console.log(duplicates(array));