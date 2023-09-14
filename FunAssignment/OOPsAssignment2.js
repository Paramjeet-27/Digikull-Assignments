class Animal {
	constructor(name, sound) {
		this.name = name;
		this.sound = sound;
	}
	makeSound() {
		console.log(this.name, this.sound);
	}
	static getNumber() {
		console.log(Math.floor(Math.random()*100000));
	}
}

class Cat extends Animal {
	makeSound () {
		console.log(`The ${this.name} makes sound of ${this.sound}`);
	}
}

let a = new Animal ("Dog", "Barks");
let c = new Cat("Cats", "Meow");
a.makeSound();
c.makeSound();
Cat.getNumber();