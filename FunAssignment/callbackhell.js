const details = {
    name: "Pankaj",
    age: 26,
    native: "Indian",
    gender: "Male",
    address: "fgfjhn, fsf, sdrfgd"
};

setTimeout(() => {
    console.log(details.name);
    setTimeout(() => {
        console.log(details.age);
        setTimeout(() => {
            console.log(details.native);
            setTimeout(() => {
                console.log(details.gender);
                setTimeout(() => {
                    console.log(details.address);
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)