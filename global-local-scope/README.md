# JavaScript - Global & Local scope

`Global-scope` - variables which are not defined in any if block or functions will have global scope.
```javascript
let age = 20;
console.log("This is global scope age: ", age);
```

`Local-scope` - variables which are defined in any if block or functions will be local scope to that blocks.

```javascript
if (age >= 15) {
    let age = 30;
    console.log("This is local scope age:", age);
}
```