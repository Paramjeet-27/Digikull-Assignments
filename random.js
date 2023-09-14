// Question 1
const palindromeStr = str => {
  let stri = str.toLowerCase();
  let rever = "";
  let strin = stri;
  for (let b = stri.length - 1; b >= 0; b--) {
      rever += stri[b];
  }
  return rever === strin ? `It is a "Palindrome"` : `It is NOT a "Palindrome"`;
}
const str = "Malayalam";
console.log(palindromeStr(str));

// Question 2
const checkPrime = p => {
  const factor = [];
  for (let q = 0; q <= p; q++) {
      if (p % q === 0) {
          factor.push(q);
      }
  }
  return factor.length === 2;
}
const sumOfPrimes = (start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (checkPrime(i)) {
      sum += i ;
    }
  }
  return sum;
}
const start = 1;
const end = 100;
console.log(sumOfPrimes(start, end));

// Question 3
const insertDash = num => {
  const snum = String(num);
  let result = "";
  for (let i = 0; i < snum.length; i++) {
    result += snum[i];
    if ((snum[i] % 2 === 0) && (snum[i + 1] % 2 === 0)) {
      result += "-";
    }
  }
  return result;
}
const num = 225468;
console.log(insertDash(num));

// Question 4
const modifiedArray = (arr, index) => {
  const newArray = [];
  for (let i = index; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  for (let j = index + 1; j < arr.length; j++) {
    newArray.push(arr[j]);
  }
  return newArray;
}
const arr = [1, 3, 5, 8, 6, 7, 9];
const index = 4;
console.log(modifiedArray(arr, index));

// Question 5
const library = [
  {
    title: 'Bill Gates',
    author: 'The Road Ahead',
    reading_Status: true
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    reading_Status: true
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    reading_Status: false
  },
  {
    title: 'Big Bang Theory',
    author: 'Govardhan Thakur',
    reading_Status: true
  },
  {
    title: 'Book Random',
    author: 'Random',
    reading_Status: false
  }
];
for (let i = 0; i < library.length; i++) {
  let output = `<p><b>Title: </b>${library[i].title}</p>
  <p><b>Reading Status: </b>${library[i].reading_Status}</p><br />`;
  document.getElementById("details").innerHTML += output;
}
document.getElementById("one").innerHTML = library[0].title;
document.getElementById("sOne").innerHTML = library[0].reading_Status;
document.getElementById("two").innerHTML = library[1].title;
document.getElementById("sTwo").innerHTML = library[1].reading_Status;
document.getElementById("three").innerHTML = library[2].title;
document.getElementById("sThree").innerHTML = library[2].reading_Status;


// Question 6
const apiWithAsycAwait = async () => {
const result = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await result.json();
for (let j = 0; j < data.length; j++) {
  console.log(data[j].address);
}
for (let i = 0; i < data.length; i++) {
  const addr = data[i].address;
  document.getElementById("address").innerHTML += `<p><b>Street: </b>${addr.street}</p>`;
  document.getElementById("address").innerHTML += `<p><b>Suite: </b>${addr.suite}</p>`;
  document.getElementById("address").innerHTML += `<p><b>City: </b>${addr.city}</p>`;
  document.getElementById("address").innerHTML += `<p><b>ZIP: </b>${addr.zipcode}</p><br />`;
}
}
apiWithAsycAwait();
