const uniques = array => {
    const newArray = [];
    let element = null;
    for (let i = 0; i < array.length; i++) {
        element = array[i];
        for (let j = 0; j < array.length; j++) {
            if ((i !== j) && (array[i] === array[j])) {
                element = null;
            }
        }
        if (element !== null) {
            newArray.push(element);
        }
    }
    return newArray;
}
const array = [1, 6, 8, 4, 3, 9, 4, 5, 8, 7, 1, 2, 6, 8, 1, 4, 1];
console.log(uniques(array));