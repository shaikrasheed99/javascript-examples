const players = [
    {
        name: "Sachin",
        score: 200
    },
    {
        name: "Virat",
        score: 183
    },
    {
        name: "Dhoni",
        score: 190
    }
];

const getScore = (name, callback) => {
    setTimeout(() => {
        players.forEach((player) => {
            if (player.name == name) {
                callback(player.score);
            }
        })
    }, 1000)
};


let totalScore = 0;

const printScore = (score) => {
    console.log("Score is: ", score);
}

getScore("Virat", (score) => {
    totalScore += score;
    getScore("Sachin", (score) => {
        totalScore += score;
        getScore("Sachin", (score) => {
            totalScore += score;
            printScore(totalScore);
        });
    });
});