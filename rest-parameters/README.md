# JavaScript - Rest parameters

Rest parameters is denoted by three dots `...`

It is used to represent an indefinite number of arguments as an array. 

It allows you to pass a varying number of arguments to a function without explicitly defining them as individual parameters. 

* Syntax:
    ```javascript
    const sum = (...scores) => {
        scores.forEach(() => {
            // statement
        });
    };

    sum(1, 2, 3, 4, 5, 6);
    ```