const scores = [75, 51, 24, 90, 12, 89, 100, 95, 34, 57, 61, 10, 39, 46, 88];

const scoresGreaterThanFifty = scores.filter((score) => {
    return score > 50;
});

console.log(scoresGreaterThanFifty);