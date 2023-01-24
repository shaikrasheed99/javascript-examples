const student = {
    name: "Ironman",
    age: 3000,
    marks: [100, 200, 300, 400, 500],
    isAlive: false,
    totalMarks() {
        console.log("Total marks of ironman:");
        let sum = 0;
        this.marks.forEach((number) => {
            sum = sum + number;
        })
        return sum;
    },
    displayMarks() {
        console.log("Marks of ironman:");
        this.marks.forEach((number) => {
            console.log(number);
        })
    }
}

student.displayMarks()
console.log(student.totalMarks());