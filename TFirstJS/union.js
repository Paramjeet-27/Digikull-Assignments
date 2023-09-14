// Union of an array
const union = (arr1, arr2) => {
    let temparray = arr1.concat(arr2);
    let array = [];
    for (i = 0; i < temparray.length; i++) {
        if (array.indexOf(temparray[i]) === -1) {
            array.push(temparray[i]);
        }
    }
    return array;
}
const arr1 = [3, 5, 6, 7];
const arr2 = [1, 2, 3, 4, 5, 8];
console.log(union(arr1, arr2));