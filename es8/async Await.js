const helloMundo = () => {
    return new Promise ((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve ('helloMundo') , 3000)
    : reject(new Error('Text Error'))
    })
}
//Funcion Con Async
const helloAsync = async () => {
    //Palabra Reservada 
    const hello = await helloMundo();
    const hello2 = await helloMundo();
    console.log(hello);
    console.log(hello2);
}
helloAsync();

const anotherFunction = async () => {
    try{
        const hello = await helloMundo();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}
anotherFunction();