const shortestWord = str => {
    let strArray = str.split(" ");
    let shortest = strArray[0].length;
    let word = strArray[0];
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i].length < shortest) {
            shortest = strArray[i].length;
            word = strArray[i];
        }
    }
    return word;
}
let str = "Hi how are u doing";
console.log(shortestWord(str));