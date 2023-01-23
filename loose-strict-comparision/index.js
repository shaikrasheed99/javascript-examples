let ageFromDatabase = 25;
let ageFromUser = "25";
let isEqual = (ageFromDatabase == ageFromUser)
console.log("Result of loose comparision:", isEqual);

isEqual = (ageFromDatabase === ageFromUser)
console.log("Result of strict comparision:", isEqual);