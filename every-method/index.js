const scores = [20, 10, 5, 30, 4, 100, 19, 40, 55, 69];

const isAllElmentsArePositive = scores.every((element) => {
    return element > 0;
})

console.log(isAllElmentsArePositive);