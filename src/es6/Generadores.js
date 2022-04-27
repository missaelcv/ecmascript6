        //Generadores
function* helloMundo(){
    if (true) {
        yield 'Hello,' ;
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloMundo();

console.log(generatorHello.next(). value);
console.log(generatorHello.next(). value);
console.log(generatorHello.next(). value);