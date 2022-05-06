//Caracteristica con promesas 

const promise1 = new Promise((resolver,reject) => reject("reject"));
const promise2 = new Promise((resolver,reject) => resolver("resolver"));
const promise3 = new Promise((resolver,reject) => resolver("resolver 1"));

Promise.allSettled([promise1,promise2,promise3])
.then(response => console.log(response));