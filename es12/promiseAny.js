//Promesas con las caracteristica de ECMA 21

const promise1 = new Promise((resolver, reject) => reject("1"));
const promise2 = new Promise((resolver, reject) => resolver("2"));
const promise3 = new Promise((resolver, reject) => resolver("3"));

Promise.any([promise1,promise2,promise3])
.then(response => console.log(response));