// Intersection of an array
const intersection = (arr1, arr2) => {
    const array = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                array.push(arr1[i]);
            }
        }
    }
    return array;
}
const arr1 = [3, 5, 4, 6];
const arr2 = [3, 1, 2, 4, 5];
console.log(intersection(arr1, arr2));