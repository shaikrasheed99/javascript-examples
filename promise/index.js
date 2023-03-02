const hasRightToVote = (age) => {
    return new Promise((resolve, reject) => {
        if (age < 1) {
            reject("Please enter valid age!");
        }

        if (age < 18) {
            resolve("You cannot vote because you are under 18!");
        }

        resolve("You can vote!")
    });
};

hasRightToVote(120).then(data => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})