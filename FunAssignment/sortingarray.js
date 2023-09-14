const sortedArray = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            let temp = null;
            if (array[i] > array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
const array = [5, 7, 9, 3, 10, 34, 76, 1, 24];
console.log(sortedArray(array));