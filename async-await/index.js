const findVirat = () => {
    return {
        name: "Virat",
        score: 183
    };
};

const getScoreOfVirat = async () => {
    const player = await findVirat();
    return player.score;
};

getScoreOfVirat()
    .then((score) => {
        console.log("Score is: ", score);
    });