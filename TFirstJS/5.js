// Find if armstrong number ot not.
const isArmstrong = num => {
    let sum = 0;
    let number = num;
    // digits = String(num);
    while (number > 0) {
        let unit = number % 10;
        sum += unit ** 3;
        number = Math.floor(number / 10);
    }
    return sum === num;
}
let num = 153;
console.log(isArmstrong(num));

// Check if Palindrome number or not.
const isPalindrome = num1 => {
    let num1rev = null
    let num1temp = num1;
    while (num1temp > 0) {
        let units = num1temp % 10;
        num1rev = num1rev * 10 + units;
        num1temp = Math.floor(num1temp / 10)
    }
    return num1rev === num1;
}
let num1 = 121;
console.log(isPalindrome(num1));

// Reversing a string.
const revString = str => {
    let rev = "";
    for (let a = str.length - 1; a >= 0; a--) {
        rev += str[a];
    }
    return rev;
}
const str = "Hello World";
console.log(revString(str));

// Palindrome String
const palindromeStr = strin => {
    let rever = "";
    let stri = strin;
    for (let b = stri.length - 1; b >= 0; b--) {
        rever += stri[b];
    }
    return rever === strin;
}
const strin = "WoW";
console.log(palindromeStr(strin));

//Second Largest Number
const secondLargest = arr => {
    let largest = arr[0];
    let secLargest = arr[0];
    for (c = 0; c < arr.length; c++) {
        if (arr[c] > largest) {
            secLargest = largest;
            largest = arr[c];
        }
        else if (arr[c] > secLargest) {
            secLargest = arr[c];
        }
    }
    return secLargest;
}
const arr = [3, 7, 9, 6, 8];
console.log(secondLargest(arr));