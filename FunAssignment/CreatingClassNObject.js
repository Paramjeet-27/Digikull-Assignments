class Description {
    constructor(name, education) {
        this.name = name;
        this.education = education;
    }
    getOutput() {
        return `I am ${this.name} and I am currently doing ${this.education}.`
    }
}
const d1 = new Description("Shakti", "Front-End");
const d2 = new Description("Ravi", "B.Tech");
const d3 = new Description("Kapoor", "MBA");
const d4 = new Description("Ujjwal", "BBA");
const d5 = new Description("Girish", "LLB");
console.log(d2.getOutput());