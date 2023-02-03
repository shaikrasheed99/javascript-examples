# JavaScript - Filter method

Filter is one of the methods to traverse the arrays.

It will take callback as input and selects the elements to include in the result based on the returned boolean expression inside the callback.

The callback function would be excuted for every element of the array. 

It will return the new array by not changing the original array. 

* Syntax:
    ```javascript
    const newArray = Array.filter((parameter) => {
        return // boolean expression;
    });
    ```