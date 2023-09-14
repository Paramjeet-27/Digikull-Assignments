const removeSpace = str => {
    let arr = str.split(" ");
    return arr.join("");
}
let str = "Hello how are you ?";
console.log(removeSpace(str));