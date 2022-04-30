//ES10 Caracteristicas de implementacion 
let array = [1,2,3, [1,2,3,[1,2,3]]];

//Metodo Flat recibe el primer argumento de profundida 
console.log(array.flat(2));

let array1 = [1,2,3,4,5];

//Metodo flat.Maprecibe el primer argumento de profundida 
console.log(array1.flatMap(value => [value * 2]));