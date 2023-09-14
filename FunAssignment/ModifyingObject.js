const obj = {
    Name : "Abcd",
    Age : 10,
    Gender : "Male",
    Address : {
        Street : "sdfgb",
        Street1 : "wqeerw",
        House : 234,
        PIN : 87931253
    },
    Phone : 87963135,
    Email : "dfges@fdghr.com"
}

obj.Address.Name = obj.Name;
delete obj.Name;
console.log(obj);
