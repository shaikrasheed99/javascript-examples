const sum = (...scores) => {
    const total = scores.reduce((sum, score) => {
        return sum + score;
    }, 0);

    return total;
};

console.log(sum(10, 20, 30, 40, 50));