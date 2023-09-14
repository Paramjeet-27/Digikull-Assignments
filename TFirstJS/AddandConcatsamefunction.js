const concat = (arg1, arg2) => {
    if (isNaN(arg1) && isNaN(arg2)) {
        return arg1 + " " + arg2;
    }
    else {
        let a = +arg1;
        let b = +arg2;
        return a + b;
    }
}
let arg1 = "6";
let arg2 = "4";
console.log(concat(arg1, arg2));