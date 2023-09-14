const sortedArray = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let t = array[i];
                array[i] = array[j];
                array[j] = t;
            }
        }
    }
    return array;
}
const array = [5, 7, 9, 22, 56, 8, 1, 6, 3, 2, 657, 4, 54, 10, 15];
console.log(sortedArray(array));