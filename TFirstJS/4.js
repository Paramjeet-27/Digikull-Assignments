// Question : Reversing an Array 
function getReverseArray(array) {
    var newArray = [];
    for (var f = array.length - 1; f >= 0; f--) {
        newArray.push(array[f]);
    }
    return newArray;
}
var array = [3, 6, 5, 7];
console.log(getReverseArray(array));

// Question : Multiple of element in an array with its index. 
function multipleOf(array1) {
    var newArray1 = [];
    for (var i = 0; i < array1.length; i++) {
        newArray1.push(array1[i] * i);
    }
    return newArray1;
}
var array1 = [8, 9, 2, 1];
console.log(multipleOf(array1));

// Question : Filter 2 digits elements of an array.
function getDoubleDigit(array2) {
    var newArray2 = [];
    for (var j = 0; j < array2.length; j++) {
        if ((array2[j] > 9) && (array2[j] < 100)) {
            newArray2.push(array2[j]);
        }
    }
    return newArray2;
}
var array2 = [2, 456, 77, 96, 3, 76, 236];
console.log(getDoubleDigit(array2));

// Question : Getting highest number in an array.
function getLargest(array3) {
    for (k = 0, large = array3[0]; k < array3.length; k++) {
        if (array3[k] > large) {
            large = array3[k];
        }
    }
    return large;
}
var array3 = [45, 65, 23, 78, 9, 6, 42, 25];
console.log(getLargest(array3));

// Question : Getting smallest number in an array.
function getSmallest(array4) {
    for (m = 0, small = array4[0]; m < array4.length; m++) {
        if (array4[m] < small) {
            small = array4[m];
        }
    }
    return small;
}
var array4 = [45, 65, 2, 78, 99, 6, 42, 26, 4];
console.log(getSmallest(array4));

// Question : Finding the second smallest number in an array
const secondSmallest = array5 => {
    let small = array5[0];
    let secondSmall = array5[0];
    for (let a = 0; a < array5.length; a++) {
        if (array5[a] < small) {
            secondSmall = small;
            small = array5[a];
        } else if (array5[a] < secondSmall) {
            secondSmall = array5[a];
        }
    }
    return secondSmall;
}
const array5 = [7, 9, 4, 2, 5, 6, 3, 8];
console.log(secondSmallest(array5));
