const secondLargest = arr => {
    let largest = arr[0];
    let secLargest = arr[0];
    for (c = 0; c < arr.length; c++) {
        if (arr[c] > largest) {
            secLargest = largest;
            largest = arr[c];
        }
        else if (arr[c] > secLargest) {
            secLargest = arr[c];
        }
    }
    return secLargest;
}
const arr = [3, 7, 9, 6, 8];
console.log(secondLargest(arr));