const closestToZero = array => {
    let tempvalue = null;
    let value = 100000000000000;
    let element = null;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            tempvalue = (0 - array[i]) * -1;
            if (tempvalue < value) {
                value = tempvalue;
                element = array[i];
            }
        }
        else if (array[i] < 0) {
            tempvalue = (0 - array[i]);
            if (tempvalue < value) {
                value = tempvalue
                element = array[i];
            }
        }
        else {
            return 0;
        }
    }
    return element;
}
const array = [7, 3, -5, 2, 6, 9, -3, -1, 8];
console.log(closestToZero(array));