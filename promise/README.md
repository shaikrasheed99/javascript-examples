# JavaScript - Promise

Promise is an object in javascript where it can resolve or reject the asynchronous operation.

It is a syntactical coating introduced by ES6 to escape from the callback hell.

It provides `.then()` to handle resolve and `.catch()` to handle reject operations.

* Example of promise
    ```javascript
    hasRightToVote(120).then(data => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    })
    ```

* We can use `async/await` to avoid `.then()` callback. 