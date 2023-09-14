const longestWord = str => {
    let strArray = str.split(" ");
    let longest = strArray[0].length;
    let word = strArray[0];
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i].length > longest) {
            longest = strArray[i].length;
            word = strArray[i];
        }
    }
    return word;
}
let str = "Hi how are you doing";
console.log(longestWord(str));