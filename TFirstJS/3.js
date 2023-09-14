// Question 1 : To check and count the all even numbers in an array.
function evenCount(array1) {
    for (var a = 0, count1 = 0; a <= array1.length; a++) {
        if (array1[a] % 2 === 0) {
            count1++;
        }
    }
    return count1;
}
var array1 = [6, 7, 5, 8, 4, 9];
console.log(evenCount(array1));

// Question 2 : To check and count the all odd numbers in an array.
function oddCount(array2) {
    for (var b = 0, count2 = 0; b <= array2.length; b++) {
        if (array2[b] % 2 === 1) {
            count2++;
        }
    }
    return count2;
}
var array2 = [6, 7, 52, 13, 41, 9];
console.log(oddCount(array2));

// Question 3 : Sum of all the elements in an array.
function sumTotal(array3) {
    var sum = 0;
    for (var c = 0; c < array3.length; c++) {
        sum += array3[c];
    }
    return sum;
}
var array3 = [4, 6, 5, 2, 8, 40];
console.log(sumTotal(array3));

// Question 4 : Product of all the elements in an array.
function netProduct(array4) {
    var product = 1;
    for (var d = 0; d < array4.length; d++) {
        product *= array4[d];
    }
    return product;
}
var array4 = [2, 6, 5, 8, 3, 7];
console.log(netProduct(array4));

// Question 5 : Adding 2 to odd numbers and 5 to even numbers.
function modified(array5) {
    var newArray5 = [];
    for (var e = 0; e < array5.length; e++) {
        if (array5[e] % 2 == 0) {
            array5[e] += 5;
            newArray5.push(array5[e]);
        } else {
            array5[e] += 2;
            newArray5.push(array5[e]);
        }
    }
    return newArray5;
}
var array5 = [3, 6, 2, 7, 12];
console.log(modified(array5));

// Random Question : Reversing the order of the array.
function getReverseArray(array) {
    var newArray = [];
    for (var f = array.length - 1; f >= 0; f--) {
        newArray.push(array[f]);
    }
    return newArray;
}
var array = [3, 6, 5, 7]
console.log(getReverseArray(array));

// Question 6 : Month and Seasons.
function getSeason(month) {
    var season = ["Summer", "Winter", "Spring", "Autumn"];
    switch (month) {
        case 1:
            return season[1];
            break;
        case 2:
            return season[1];
            break;
        case 3:
            return season[0];
            break;
        case 4:
            return season[0];
            break;
        case 5:
            return season[0];
            break;
        case 6:
            return season[2];
            break;
        case 7:
            return season[2];
            break;
        case 8:
            return season[2];
            break;
        case 9:
            return season[3];
            break;
        case 10:
            return season[3];
            break;
        case 11:
            return season[3];
            break;
        case 12:
            return season[1];
            break;
        default:
            console.log("Please enter the value of month between 1 and 12");
            break;
    }
}
var month = 2;
console.log(getSeason(month));

// Question 7 : Finding LCM of any 2 numbers;
function getLCM(za,zb) {
    var zc = za > zb ? za : zb;
    while (true) {
        if ((zc % za == 0) && (zc % zb == 0)) {
            return zc;
        }
        zc++
    }    
}
console.log(getLCM(6,8));

// Question 8 : Finding HCF of any 2 numbers;
function getHCF(num1,num2) {
    for (var hfnum = 1, hcf = null; hfnum <= num1 && hfnum <= num2; hfnum++) {
        if (num1 % hfnum == 0 && num2 % hfnum == 0) {
            hcf = hfnum;
        }
    }
    return hcf;
}
console.log(getHCF(9,6));

// Question 9 : Sum of all natural numbers from 1 to n.
function addition(r) {
    var summation = 0;
    for (s = 1; s <= r; s++) {
        summation += s;
    }
    return summation;
}
console.log(addition(10));

// Question 10 : Sum of First 10 even numbers.
function sumOfEven() {
    var sumeven = 0;
    for (t = 1; t <= 20; t++) {
        if (t % 2 === 0) {
            sumeven += t;
        }
    }
    return sumeven;
}
console.log(sumOfEven());

// Question 11 : Product of first 10 odd numbers.
function productOfOdd() {
    var productodd = 0;
    for (u = 1; u <= 20; u++) {
        if (u % 2 === 1) {
            productodd += u;
        }
    }
    return productodd;
}
console.log(productOfOdd());

// Question 12 : Factorial of any number.
function factorial(v) {
    var calcfactorial = 1;
    for (w = v; w > 0; w--){
        calcfactorial *= w;
    }
    return calcfactorial;
}
console.log(factorial(11));

// Question 13 : Calculate n^m.
function exponent(x,y) {
    return x**y;
}
console.log(exponent(9,3));

//Question 14 : Count of Digits in an input.
function countNum(N) {
    var counT = 0;
    if (N > 0) {
        counT++;
    }
    while (N / 10 >= 1) {
        N /= 10;
        counT++;
    }
    return counT;
}
console.log(countNum(289.63));

// Question 15 : Reverse the number.
function getReverseNumber(num3) {
    var result = null;
    while (num3 > 0) {
        var ones = num3 % 10;
        result = result * 10 + ones;
        num3 = Math.floor(num3 / 10);
    }
    return result;
}
console.log(getReverseNumber(398));

// Question 16 : Factors of any number.
function getFactors(g) {
    var fac = [];
    for (h = 0; h <= g; h++) {
        if (g % h === 0) {
            fac.push(h);
        }
    }
    return fac;
}
console.log(getFactors(6));

// Question 17 : Count the factors of any number.
function countFactors(l) {
    var facto = [];
    for (m = 0; m <= l; m++) {
        if (l % m === 0) {
            facto.push(m);
        }
    }
    for (n = 0, count3 = 0; n < facto.length; n++) {
        count3++;
    }
    return count3;
}
console.log(countFactors(63));

// Question 18 : Sum of all the factors of any number.
function sumOfFactors(i) {
    var fact = [];
    var sum1 = 0;
    for (j = 0; j <= i; j++) {
        if (i % j === 0) {
            fact.push(j);
        }
    }
    for (k = 0; k < fact.length; k++) {
        sum1 += fact[k];
    }
    return sum1;
}
console.log(sumOfFactors(63));

// Question 19 : Check if the number is prime or composite.
function checkPrime(p) {
    var factor = [];
    for (q = 0; q <= p; q++) {
        if (p % q === 0) {
            factor.push(q);
        }
    }
    return factor.length === 2 ? "The Number is Prime" : "The number is Composite"
}
console.log(checkPrime(13));