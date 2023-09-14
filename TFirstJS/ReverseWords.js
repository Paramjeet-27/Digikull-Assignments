const reverseWords = str => {
    let arr = str.split(" ");
    let newStr = [];
    let word = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            word += arr[i][j];
        }
        newStr.push(word);
        word = "";
    }
    return newStr.join(" ");
}
let str = "hello how are you makes sense?";
console.log(reverseWords(str));