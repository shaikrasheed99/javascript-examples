# JavaScript - Numbers

Numbers are one of the data types in JavaScript.

Since JavaScript is dynamically-typed language, we modify the value of integer variable to float or decimal type value.

```javascript
let number = 10;
number = 10.2;
console.log(number);
```

JavaScript has one more important data type called `NaN`, which means **Not a Number**.

```javascript
let number = 10;
let avenger = "ironman";
let result = number * avenger;
console.log(result);
```
* Since multiplication operation is happening on invalid operands, JavaScript is assigning `NaN` as result.