# JavaScript - Spread operator

Spread operator is denoted by three dots `...`

It allows us spread an array, string, or object into individual elements.

* Syntax:
    ```javascript
    const indianPlayersScore = [10, 20, 30, 40, 50, 100];
    const australianPlayersScore = [20, 10, 20, 60, 50];
    const bothTeamsScores = [...indianPlayersScore, ...australianPlayersScore];
    ```

Spread operator can be used in below ways.

* `Combining arrays`
* `Copying an array`
* `Passing arguments to a function`
* `Merging objects`