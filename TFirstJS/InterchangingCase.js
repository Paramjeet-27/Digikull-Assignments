const caseInterchange = str => {
    let check = "";
    let output = "";
    for (let i = 0; i < str.length; i++) {
        check = str[i];
        if (check == str[i].toUpperCase()) {
            output += str[i].toLowerCase();
        }
        else if (check == str[i].toLowerCase()){
            output += str[i].toUpperCase();
        }
    }
    return output;
}
let str = "HelLo I am tHe OwnEr Of ThiS hOtEl."
console.log(caseInterchange(str));
