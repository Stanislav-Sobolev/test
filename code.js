try {
    console.log('This message will not appear in the console');

cos value = 5;
    
} catch (error) {
    console.log(error.name); // "SyntaxError"
    console.log(error.message); // Unexpected token W in JSON at position 0
}
console.log("object");