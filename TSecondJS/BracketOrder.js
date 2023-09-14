const isInOrder = equation => {
    const openingBrackets = ["{", "(", "["];
    const closingBrackets = ["}", ")", "]"];
    const order = [];
    for (let br of equation) {
        let temp = null;
        if (openingBrackets.indexOf(br) !== -1) {
            order.push(br);
        }
        else if (closingBrackets.indexOf(br) !== -1) {
            temp = br;
            if ((temp == "}" && order[order.length - 1] == "{") ||(temp == ")" && order[order.length - 1] == "(") ||(temp == "]" && order[order.length - 1] == "["))
            {
                order.pop();
            }
        }
    }
    return order.length === 0;
}
const equation = "{1-3[3*4]}+(2[5-1])";
console.log(isInOrder(equation));