# JavaScript - Chaining Promises

* Example of chaining promises
    ```javascript
    const getScore = (name) => {
        return new Promise((resolve, reject) => {
            // statement
            resolve(player.score);
            reject("Player's name is not present in the players list!")
        });
    };

    getScore("Virat")
        .then((score) => {
            // statements
            return getScore("Sachin");
        })
        .then((score) => {
            // statements
        })
        .catch((error) => {
            // statements
        });
    ```

* We can use `async/await` to avoid `.then()` chaining promises. 