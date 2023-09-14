const characterDictionary = stri => {
    const str = stri.toLowerCase();
    const result = {};
    let character = "";
    for (let i = 0; i < str.length; i++) {
        character = str[i];
        if (character == " ") {
            character = "";
        }
        else if (result[character]) {
            result[character]++;
        }
        else {
            result[character] = 1;
        }
    }
    return result;
}

const checkAnangram = (str1, str2) => {
    const string1 = characterDictionary(str1);
    const string2 = characterDictionary(str2);
    const keys1 = Object.keys(string1);
    const keys2 = Object.keys(string2);
    if (keys1.length === keys2.length) {
        for (let i = 0; i < keys1.length; i++) {
            const key = keys1[i];
            if (string2[key] && string1[key] === string2[key]) {
                continue;
            }
            else {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}
const str1 = "aabdcc";
const str2 = "cbaacg"
console.log(checkAnangram(str1, str2));























// const checkAnangram = (s1, s2) => {
//     if (s1.length == s2.length) {
//         let input1 = s1.split("").sort().join("");
//         let input2 = s2.split("").sort().join("");
//         return input1 === input2;
//     }
//     else {
//         return false;
//     }
// }
// const s1 = "brash";
// const s2 = "shrub";
// console.log(checkAnangram(s1, s2));


// const checkAnangram = (s1, s2) => {
//     if (s1.length === s2.length) {
//         const array = [];
//         for (i = 0; i < s1.length; i++) {
//             for (j = 0; j < s2.length; j++) {
//                 if (s1[i] === s2[j]) {
//                     array.push(true);
//                 }
//             }
//         }
//         return array.length === s1.length;
//     }
//     else {
//         return false;
//     }
// }
// const s1 = "aab";
// const s2 = "cba";
// console.log(checkAnangram(s1, s2));