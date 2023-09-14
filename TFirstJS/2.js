// Question 1
var sname = "Rajan Kapoor";
var total = 500;
var meng = 18;
var mmath = 27;
var msci = 19;
var msocial = 18;
var mgk = 16;
var pp = 33
var rp = null;
console.log("STUDENT MARKS SHEET");
console.log("Name of the student:",sname);
console.log("Marks in English:",meng);
console.log("Marks in Mathematics:",mmath);
console.log("Marks in Science:",msci);
console.log("Marks in Social Studies:",msocial);
console.log("Marks in General Knowledge:",mgk);
console.log("Total Marks:",total);
console.log("Percentage Achieved:",rp = ((meng + mmath + msci + msocial + mgk)/500)*100,"%")
console.log("Final Result:", (rp >= pp ? "Pass":"Fail"));
if (rp >= 75) {
    console.log("Congrastulations!! You passed with Distinction!");
} else if (rp >= 60){ 
    console.log("Congratulations!! You got First Division");
} else if (rp >= 50){
    console.log("Congratulations!! You got Second Division");
} else if (rp >= 33){
    console.log("Congratulations!! You got Third Division");
} else {
    console.log("We are sorry! You did not Passed the exam");
}

// Question 2
var n1 = 59;
var n2 = 67;
var n3 = 43;
var n = null;
n = n1;
s = n1
if (n > n2 && n > n3) {
    console.log("The Largest Number is:", n);
} else {
    n = n2;
}
if (n > n1 && n > n3) {
    console.log("The Largest Number is:", n);
} else {
    n = n3;
}
if (n > n1 && n > n2) {
    console.log("The Largest Number is:", n);
}

// Question 3
var sale = 9000;
if (sale >= 10000) {
    console.log("Your comission is 5%");
} else if (sale >= 8000) {
    console.log("Your comission is 4%");
} else if (sale >= 5000) {
console.log("Your comission is 3%");
} else{
    console.log ("Your comission is 2%");
}

// Question 4
var num = -3;
console.log(num > 0 ? "The number is Positive":"The number is Negative");

// Question 5
if (s < n2 && s < n3) {
    console.log("The Smallest Number is:", s);
} else {
    s = n2;
}
if (s < n1 && s < n3) {
    console.log("The Smallest Number is:", s);
} else {
    s = n3;
}
if (s < n1 && s < n2) {
    console.log("The Smallest Number is:", s);
}

// Question 6
var num1 = 8;
console.log(num1%2 == 0 ? "The number is Even" : "The number is Odd");

//Question 7
var x = 68;
var y = 2;
console.log(x%y == 0 ? "The numbers are divisible" : "The numbers are NOT divisible");

// Question 8
if (x%y == 0) {
    console.log(x, "is the multiple of", y);
} else {
    console.log(x, "is NOT the multiple of", y);
}

// Question 9
var age = 23;
console.log(age >= 18 ? "The person is eligible to vote" : "The person is NOT eligible to vote");

// Question 10
var year = 3100;
if (year%100 == 0) {
    console.log(year%400 == 0 ? "This is a Leap Year" : "This is NOT a Leap year");
} else {
    console.log(year%4 == 0 ? "This is a Leap Year" : "This is NOT a Leap Year")
}