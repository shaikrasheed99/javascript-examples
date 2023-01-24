// primitive section
let captain = "Captain America";
let firstAvenger = captain;
captain = "Captain"
console.log("First avenger value is:", firstAvenger);
console.log("Captain value is:", captain);

// reference section
const ironman = {
    name: "Ironman",
    movie: "Ironman"
};
const avenger = ironman;
ironman.movie = "Ironman - 2008"
console.log(ironman);
console.log(avenger);