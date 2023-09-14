class Shape {
    // area() { }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return `Area of Circle is ${3.4 * (this.radius ** 2)}`;
    }
    numeric() {
        return 3.4 * (this.radius ** 2);
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return `Area of Square is ${this.side ** 2}`;
    }
    numeric() {
        return this.side ** 2;
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    area() {
        return `Area of Rectangle is ${this.length * this.width}`;
    }
    numeric() {
        return this.length * this.width;
    }
}

class Triangle extends Shape {
    constructor(height, base) {
        super();
        this.height = height;
        this.base = base;
    }
    area() {
        return `Area of Triangle is ${0.5 * (this.height * this.base)}`;
    }
    numeric() {
        return 0.5 * (this.height * this.base);
    }
}

const shapes = [new Circle(5), new Square(5), new Rectangle(5, 6), new Triangle(9, 2)];

shapes.forEach(i => console.log(i.area()));

console.log(`The combined area is : ${shapes.reduce((sum, i) => sum + i.numeric(), 0)}`);