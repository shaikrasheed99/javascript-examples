# JavaScript - Functions

Functions are used to organise the code into separate meaningful blocks to maintain and debug easily.

* Syntax of functions:
    ```javascript
    function nameOfFunction(parameters) {
        //statements
    }

    nameOfFunction(arguments) //calling function
    ```

* Function declaration:
    ```javascript
    function greet(avenger) {
        return `Hello, ${avenger}`
    }

    greet("ironman")
    ```

* Function Expression:
    ```javascript
    const greet = function(avenger) {
        return `Hello, ${avenger}`
    }

    greet("ironman")
    ```
* Functions vs Methods
    * Functions does not specific to any objects.
    * Methods are specific to objects.