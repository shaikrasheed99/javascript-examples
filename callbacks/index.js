const sumOfTwoNumbers = (numOne, numTwo, callback) => {
    sum = numOne + numTwo;
    callback(sum);
};

const displaySum = sum => console.log("Sum is:", sum);

sumOfTwoNumbers(10, 20, displaySum);