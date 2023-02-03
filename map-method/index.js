const avengers = [
    {name: "Ironman", marks: 52},
    {name: "Thor", marks: 73},
    {name: "Thanos", marks: 100},
    {name: "Hulk", marks: 17},
    {name: "Captain America", marks: 60},
    {name: "Loki", marks: 80}
];

const avengersWithGrades = avengers.map((avenger) => {
    const score = avenger.marks;
    let grade = "";
    const updatedAvenger = {avenger};

    
    if (score >= 80) {
        grade = "A";
    } else if (score >= 70) {
        grade = "B";
    } else if (score >= 60) {
        grade = "C";
    } else if (score >= 50) {
        grade = "D";
    } else if (score >= 40) {
        grade = "E";
    } else {
        grade = "F";
    }
    
    // grade = (score >= 80)?"A":(score >= 70)?"B":(score >= 60)?"C":(score >= 50)?"D":(score >= 40)?"E":"F";

    updatedAvenger["Grade"] = grade;
    return updatedAvenger;
});

console.log(avengersWithGrades);
