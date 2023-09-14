const youngest = details => {
    let young = details[0];
    for (let ele of details) {
        if (ele.age < young.age) {
            young = ele;
        }
    }
    return young.name;
}
const details = [
    {
        name: "Ravi",
        age: 23
    },
    {
        name: "Prashant",
        age: 39
    },
    {
        name: "Tanvi",
        age: 26
    },
    {
        name: "Gopal",
        age: 19
    },
    {
        name: "Yashwant",
        age: 35
    },
    {
        name: "Kartik",
        age: 56
    }
]
console.log(youngest(details));