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

const swapnumbers = array => {
    let temp = null;
    temp = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = temp;
    return array;
}

const checkEven = array => {
    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            return true;
        }
    }
    return false;
}


const arr1 = [1, 2, 6, 8, 4];
const arr2 = [3, 5, 7, 9, 10];
const merged = [...arr1, ...arr2];
const newMerged = [...merged];
const sort = sorted(newMerged);
const newSort = [...sort];
const swapped = swapnumbers(newSort);
const newSwapped = [...swapped];
const evenOdd = checkEven(newSwapped);
console.log(merged);
console.log(sort);
console.log(swapped);
console.log(evenOdd);

