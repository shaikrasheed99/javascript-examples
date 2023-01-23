let password = "password123"

if (password.length >= 12) {
    console.log("Password is Strong!!");
} else if (password.length >= 8) {
    console.log("Password is Moderate!!");
} else {
    console.log("Password is Weak!!");
}