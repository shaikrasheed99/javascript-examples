let age = 20;

if (age >= 15) {
    let age = 30;
    console.log("This is local scope age:", age);
}

console.log("This is global scope age: ", age);