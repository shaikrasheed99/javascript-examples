const avengers = [
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

for (const key in avengers) {
    console.log(avengers[key]);
}