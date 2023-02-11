const avengers = ["Ironman", "Thor", "Thanos", "Captain"];

const avengersWithPowers = [
    {
        name: "Ironman",
        power: 100
    },
    {
        name: "Thor", 
        power: 120
    },
    {
        name: "Thanos", 
        power: 200
    },
    {
        name: "Captain",
        power: 90
    }
];

console.log("Traversing avengers using for-of: ");
for (const avenger of avengers) {
    console.log(avenger);
}
console.log(); // for new line in output


console.log("Traversing avengersWithPowers using for-of: ");
for (const avenger of avengersWithPowers) {
    console.log(avenger);
}
console.log(); // for new line in output


console.log("Traversing avengers using for-in: ");
for (const index in avengers) {
    console.log(avengers[index]);
}
console.log(); // for new line in output


console.log("Traversing avengersWithPowers using for-in: ");
for (const key in avengersWithPowers) {
    console.log(avengersWithPowers[key]);
}
console.log(); // for new line in output


console.log("Traversing avenger string using for-of: ");
let avenger = "Ironman";
for (const character of avenger) {
    console.log(character);
}
console.log(); // for new line in output


console.log("Traversing avenger string using for-in: ");
avenger = "Ironman";
for (const character in avenger) {
    console.log(character);
}
console.log(); // for new line in output