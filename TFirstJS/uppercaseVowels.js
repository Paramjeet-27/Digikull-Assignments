const convertVowels = str => {
    let stri = str.toLowerCase();
    const vowels = "aeiouAEIOU";
    let output = "";
    for (let i of stri) {
        if (vowels.indexOf(i) !== -1) {
            output += i.toUpperCase();
        } else {
            output += i;
        }
    }
    return output;
}
let str = "How are you ?"
console.log(convertVowels(str));