# JavaScript - Difference between For-of and For-in loops

Basically, `for-of` and `for-in` are used to traverse the objects, arrays, strings etc...

But their way of traversing is different from each of them. 

* For-of way of traversing is based on value.
    ```javascript
    const avengers = ["Ironman", "Thor", "Thanos", "Captain"];
    for (const avenger of avengers) {
        console.log(avenger);
    }
    ```
    * each iteration of above loop will target on every avenger value.

    ```javascript
    const avengersWithPowers = [{name: "Ironman", power: 100},{name: "Thor", power: 120},{name: "Thanos", power: 200},{name: "Captain", power: 90}];
    for (const avenger of avengersWithPowers) {
        console.log(avenger);
    }
    ```
    * each iteration of above loop will target on every avengersWithPowers object. 
    * example: `{name: "Ironman", power: 100}`

* For-in way of traversing is based on key or index.
    ```javascript
    const avengers = ["Ironman", "Thor", "Thanos", "Captain"];
    for (const index in avengers) {
        console.log(avengers[index]);
    }
    ```
    * each iteration of above loop will target on index of avenger.
    * we have to specifically access the avenger with the index value.

    ```javascript
    const avengersWithPowers = [{name: "Ironman", power: 100},{name: "Thor", power: 120},{name: "Thanos", power: 200},{name: "Captain", power: 90}];
    for (const key in avengersWithPowers) {
        console.log(avengersWithPowers[key]);
    }
    ```
    * each iteration of above loop will target on key of avengersWithPowers object
    * we have to specifically access the avengersWithPowers object with the key value.

