const sorted = newArray => {
    for (let i = 0; i < newArray.length; i++) {
        for (let j = i + 1; j < newArray.length; j++) {
            if (newArray[i] > newArray[j]) {
                let t = newArray[i];
                newArray[i] = newArray[j];
                newArray[j] = t;
            }
        }
    }
    return newArray;
}

const merge = (arr1, arr2) => {
    const mergedArray = [];
    for (let i = 0; i < arr1.length; i++) {
        mergedArray.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        mergedArray.push(arr2[i]);
    }
    sorted(mergedArray);
    return mergedArray;
}

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];
console.log(merge(arr1, arr2));