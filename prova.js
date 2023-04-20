function sayHello(nome = "world")  {
    return new Promise((resolve, reject) => {
        if (nome === "world") {
            reject("Please") 
        } else {
    console.log(`Hello, ${nome}`); 
    resolve();
        }
});
}


 sayHello("world")
.then(() => sayHello("José"))
.then(() => sayHello("Maria"))
.then(() => sayHello("Pedro"))
.catch((err) => console.log(err))