const indianPlayersScore = [10, 20, 30, 40, 50, 100];
const australianPlayersScore = [20, 10, 20, 60, 50];

const bothTeamsScores = [...indianPlayersScore, ...australianPlayersScore];
console.log(bothTeamsScores);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 }; 
console.log(mergedObj);