const countVowels = str => {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (const i of str) {
        if (vowels.indexOf(i) !== -1) {
            count++;
        }
    }
    return count;
}
let str = "How aedrio cfet?"
console.log(countVowels(str));