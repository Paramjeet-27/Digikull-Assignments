// Find Sum among the array elements and if no values are present, return false.
const getSum = (array, value) => {
    const newArray = [];
    for (a = 0; a < array.length; a++) {
        for (b = 0; b < array.length; b++) {
            if (array[a] + array[b] == value) {
                newArray.push(array[a], array[b]);
                return newArray;
            }
        }
    }
    return false;
}
const array = [2, 56, 7, 6, 38, 9, 12];
const value = 69;
console.log(getSum(array, value));