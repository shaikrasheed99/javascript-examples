# JavaScript - Promise

Promise is an object in javascript where it can resolve or reject the asynchronous operation.

It is a syntactical coating introduced by ES6 to escape from the callback hell.

It provides `.then()` to handle resolve and `.catch()` to handle reject operations.

* Example of promise
    ```javascript
    const hasRightToVote = (age) => {
        return new Promise((resolve, reject) => {
            // statements
            resolve("You can vote!")
            reject("Please enter valid age!");
        });
    };

    hasRightToVote(120).then(data => {
        // statements
    }).catch((error) => {
        // statements
    })
    ```

* We can use `async/await` to avoid `.then()` callback. 