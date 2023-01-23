# JavaScript - Strings

Strings are one of the data types of JavaScript, where they are used to store sequence of characters. 

* `' '` or `" "` - used to represent values of a string.
* `String.length` - used to find how many characters are present in the string.
* `string[2]` - used to get the specific character 

## Concatenation
* There are two ways to concatenate a two or more strings. 
    1. Using `+` operator.
        ```javascript
        let firstName = "Ratan";
        let lastName = "Tata";
        let fullName = firstName + " " + lastName;
        ```

    2. Using Template Literals.
        ```javascript
        let firstName = "Ratan";
        let lastName = "Tata";
        let fullName = `${firstName} ${lastName}`;
        ```

        * There are many things we can do with Template literals.
            * Define strings.
                ```javascript
                let avenger = `ironman`
                ```
            * Quote inside strings.
                ```javascript
                let stringWithQuote = `He's often called "Ironman"`
                ```
            * Define multiline strings.
                ```javascript
                let multilineString =
                `He's 
                often 
                called 
                "Ironman"`;
                ```
            * Define interpolate variables and expressions into strings.
                ```javascript
                let firstName = "Ratan";
                let lastName = "Tata";
                let fullName = `${firstName} ${lastName}!`;
                let radius = 10;
                const PI = 3.14;
                let areaOfCircle = `Area of circle: ${PI * (radius**2)}`;
                ```

## Methods
* `toLowerCase()` - used to make a string to lower case characters.
* `toUpperCase()` - used to make a string to upper case characters.
* `indexOf('')` - used to get the index of particular character.
    * if the character is present, it will return a number.
    * if the character is not present, it will return `-1` number as result.
* `lastIndexOd('')` - same as `indexOf()` but finds the last occurrence.
* `slice()` - used to get the sub string from a string by taking `start` and `end` index values as input.

```javascript
let avenger = "Ironman";
let lowerCaseOfAvenger = avenger.toLowerCase();
let upperCaseOfAvenger = avenger.toUpperCase();
let indexOfN = avenger.indexOf("n");
let lastIndexOfN = avenger.lastIndexOf("n");
let slicedAvenger = avenger.slice(2, 5);
```