const scores = [20, 10, 5, 30, 4, 100, 19, 40, 55, 69];

const doesScoresContainHundred = scores.some((element) => {
    return element >= 100;
})

console.log(doesScoresContainHundred);