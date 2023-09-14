// Getting the index of the element in an array and if element is not present, return -1
function getElement(array, a) {
    for (i = 0; i <= array.length; i++) {
        if (a == array[i]) {
            return i;
        }
    }
    return -1;
}
var array = [7, 9, 3, 1, 4, 6, 2, 5];
console.log(getElement(array, 6));


// Iterating the array
const elements = array1 => {
    for (let b = 0; b < array1.length; b++) {
        console.log(array1[b]);
    }
    return
}
const array1 = [1, 4, 5, 7, 3, 8];
elements(array1);


// Removing an element from an array.
function removeElement(array2, ele) {
    var newArray = [];
    for (var c = 0; c < array2.length; c++) {
        if (array2[c] !== ele) {
            newArray.push(array2[c]);
        }
    }
    return newArray;
}
var array2 = [4, 5, 8, 8, 4, 6, 7];
var ele = 8;
console.log(removeElement(array2, ele));