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
let stri = "Hello this room belongs to me";
console.log(characterDictionary(stri));