const firstLetterUpper = str => {
    let arr = str.split(" ");
    let newStr = [];
    let word = null;
    for (let i = 0; i < arr.length; i++) {
        word = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
        newStr.push(word);
    }
    return newStr.join(" ");
}
let str = "hello how are you makes sense?";
console.log(firstLetterUpper(str));