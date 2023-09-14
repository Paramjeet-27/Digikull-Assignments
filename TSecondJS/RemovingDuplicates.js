const removeDuplicates = array => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
const array = [1, 6, 8, 4, 3, 9, 4, 5, 7, 2, 1, 8];
console.log(removeDuplicates(array));