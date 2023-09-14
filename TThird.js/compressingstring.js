const makingObj = k => {
    if (!obj) {
        let obj = {k: 1};
    }
    return obj;
}

const compress = str => {
    const array = [];
    let character = "";
    for (let i = 0; i < str.length; i++) {
        character = str[i];
        if (str[i + 1] === str[i]) {
            makingObj(str[i])
        }
        
    }
    return array.length;
}
const str = "aaabbbbcccdefffffddd";
console.log(compress(str));