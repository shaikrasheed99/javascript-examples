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

const getScore = (name) => {
    return new Promise((resolve, reject) => {
        players.forEach((player) => {
            if (player.name == name) {
                resolve(player.score);
            }
        });
        reject("Player's name is not present in the players list!")
    });
};


let totalScore = 0;

const printScore = (score) => {
    console.log("Score is: ", score);
}

getScore("Virat")
    .then((score) => {
        totalScore += score;
        return getScore("Sachin");
    })
    .then((score) => {
        totalScore += score;
        return getScore("Dhoni");
    })
    .then((score) => {
        totalScore += score;
        printScore(totalScore);
    })
    .catch((error) => {
        console.log(error);
    });