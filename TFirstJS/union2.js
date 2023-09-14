// Union of an array method 2
const union = (arr1, arr2) => {
    const array = [...arr1];
    // for (let i = 0; i < arr1.length; i++) {
    //     if (array.indexOf(arr1[i]) === -1) {
    //         array.push(arr1[i]);
    //     }
    // }
    for (let j = 0; j < arr2.length; j++) {
        if (array.indexOf(arr2[j]) === -1) {
            array.push(arr2[j]);
        }
    }
    return array;
}
const arr1 = [3, 5, 6, 7];
const arr2 = [1, 2, 3, 4, 5, 8];
console.log(union(arr1, arr2));