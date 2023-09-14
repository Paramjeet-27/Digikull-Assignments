const heros = [
    { name: 'Spider-Man' },
    { name: 'Thor' },
    { name: 'Black Panther' },
    { name: 'Captain Marvel' },
    { name: 'Silver Surfer' }
]

const array = heros.map(hobj => {
    hobj.hero = hobj.name;
    delete hobj.name;
    hobj.id = heros.indexOf(hobj);
    return hobj;
})

console.log(array);