
const helloMundo = () => {
    return new Promise ((resolve, reject) => {
    (true)
    ? setTimeout( () =>  resolve ('Hello Mundo'),3000)
    : reject (new Error ('Test Error'))
 })
}
helloMundo()
.then(Response => console.log(Response))
.catch(error => console.log(error))
.finally( () => console.log("finalizado"))