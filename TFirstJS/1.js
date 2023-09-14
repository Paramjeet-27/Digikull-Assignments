// Question 1
console.log("Hello Word");

// Question 2
var a = 12;
var b = 10;
console.log("Sum is:",a+b);
console.log("Product is:",a*b);
console.log("Division is:",a/b);
console.log("Difference is:",a-b);
console.log("Remainder is:",a%b);

// Question 3
var sname = "Rajan Kapoor";
var total = 500;
var meng = 78;
var mmath = 87;
var msci = 79;
var msocial = 98;
var mgk = 76;
var pp = 60
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
console.log("Final Result:", (rp >= pp ? "Pass":"Fail"))

// Question 4
var c = 4;
var d = 9;
var temp = null;
temp = c;
c = d;
d = temp;
console.log(c,d)

// Question 5
var x = 3;
var y = 7;
x = 21/x;
y = 21/y;
console.log(x, y);

// Question 6
var amt = null;
var si = null;
var p = 250000;
var r = 5;
var t = 8;
si = (p*r*t)/100;
amt = p + si;
console.log("Your calculated interest is: INR",si, "only")
console.log("Your total ammount to be paid by you is: INR",amt, "only")