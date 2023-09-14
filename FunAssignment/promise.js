// Excercise 1
const prom = Promise.resolve(3);
prom.then(val => console.log(val));

// Excercise 2
let err = `Boo`;
const promi = Promise.reject(err);
promi.catch(erro => console.log(erro));

// Excercise 3
const promise1 = new Promise((res, rej) => {
    const itShouldResolve = false;
    setTimeout(() => {
        itShouldResolve ? res() : rej();
    }, 2000);
});

promise1.then(() => {
    console.log(`The Promise is Resolved`);
})

promise1.catch(() => {
    console.log(`The Promise is Rejected`);
})