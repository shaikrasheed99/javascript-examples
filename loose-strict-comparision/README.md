# JavaScript - Loose & Strict comparisions

Loose comparisions will only compare the values of two variables.
```javascript
let ageFromDatabase = 25;
let ageFromUser = "25";
let isEqual = (ageFromDatabase == ageFromUser)
```
* The result of above example is `true`, because `==` compare only values.

Strict comparisions will compare both the values and types of two variables.
```javascript
let ageFromDatabase = 25;
let ageFromUser = "25";
isEqual = (ageFromDatabase === ageFromUser)
```
* The result of above example is `false`, because `===` compare value and types. Since one value is integer type and another is string type, that's the reason behind the result as `false`.