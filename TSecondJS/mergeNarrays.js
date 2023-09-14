const removeDuplicates = array => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

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

const merge = (...arrays) => {
    let array = [];
    for (let i = 0; i < arrays.length; i++) {
        // for (let j = 0; j < arrays[i].length; j++) {
        //     array.push(arrays[i][j]);
        // }
        array = [...array, ...arrays[i]];
    }
    return sorted(removeDuplicates(array));
}
const a = [5, 7, 9, 54];
const b = [22, 56, 8, 12];
const c = [1, 6, 3, 2];
const d = [657, 4, 12];
const e = [54];
const f = [1, 2, 4, 6, 8, 10, 15];
console.log(merge(a, b, c, d, e, f));