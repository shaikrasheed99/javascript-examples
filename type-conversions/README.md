# JavaScript - Type conversions

`typeof` keyword is used to check the type of variables.

## Number
* `Number("")`
    * used to convert a variable from string type to number type.
        ```javascript
        let score = "100";
        score = Number(score) + 1;
        ```
    * if we try to convert a string of non number characters, `Number("")` would return `NaN` as result.
        ```javascript
        let avenger = "ironman";
        avenger = Number(avenger);
        ```

## String
* `String()`
    * used to convert a variable from number type to string type.
        ```javascript
        let age = 25;
        let ageInStringFormat = String(age);
        ```

## Boolean
* `Boolean()`
    * used to convert a variable from number type to boolean type.
        ```javascript
        let ten = 10;
        let tenInBoolean = Boolean(ten);
        let zero = 0;
        let zeroInBoolean = Boolean(zero);
        ```
        * if the value is `0`, then boolean value of it is `false`.
        * if the value is less or greater than `0`, then boolean value of it is `true`.
        
    * used to convert a variable from string type to boolean type.
        ```javascript
        let avenger = "ironman";
        let avengerInBoolean = Boolean(avenger);
        let emptyString = "";
        let emptyStringInBoolean = Boolean(emptyString);
        ```
        * if the value of string is empty `""`, then boolean value of it is `false`.
        * if the value of string is non empty, then boolean value of it is `true`.