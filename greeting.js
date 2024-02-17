function greet(firstname) {
    const greeting = `Hello, ${firstname}`;
    console.log(greeting);

    if (firstname == "John") {
        console.log("He is 40 years old");
    }
}

greet("John");