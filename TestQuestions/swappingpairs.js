const swappingPairs = array => {
    const newArray = [];
    if (array.length % 2 === 0) {
        // for (let i = 0; i < array.length; i++) {
        //     for (let j = i + 1; j < array.length; j++) {
        //         newArray.push(array[j]);
        //         newArray.push(array[i]);
        //         i++;
        //         break;
        //     }
        //     continue;
        // }
        // return newArray;
        let i = 0;
        while (i < array.length) {
            newArray.push(array[i+1]);
            newArray.push(array[i]);
            i += 2;
        }
        return newArray;
    }
    else {
        return `The array has odd number of elements, thus pairing is not possible.`
    }
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(swappingPairs(array));