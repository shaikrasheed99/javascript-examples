const scores = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const totalScore = scores.reduce((sum, score) => {
    return sum + score;
}, 0);

console.log(totalScore);