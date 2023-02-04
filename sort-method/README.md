# JavaScript - Sort method

Sort method is used to sort the arrays, objects based on the properties inside them.

It will do inplace sorting technique without changing the original arrays, objects.

It will take callback as input for comparision and internally that callback would again take two more parameters (`a` and `b`).

`NOTE:` by default, a sort function without callback will first convert the numbers into string and apply sorting technique on them. 

* Syntax:
    ```javascript
    Array.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
    });
    ```

    ```javascript
    Array.sort((a, b) => {
        return a - b // increasing order
        return b - a // decreasing order
    });
    ```

    The comparision will be done based on the below three values.
    * `1` - put the `b` before `a`.
    * `0` - leave `a` and `b` unchanged.
    * `-1` - put the `a` before `b`.