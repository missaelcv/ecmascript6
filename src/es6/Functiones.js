//Sin ECMA6
let name = 'Missael';
let age = 21;

//ES5
obj = { name : name, age : age };

//Con ECMA6
obj2 = { name, age};
console.log(obj2);

//Funciones Tipo Flecha
const names = [ 
     { name: 'Missael', age: 24},
     { name: 'Maileny', age: 21}
    ]
     //Obtener el valor individuar 
    
      //sin la funciones Flecha
     let list0fNames = name.map(function (item) {
         console.log(item.name);
     })

        //con la funciones Flecha
        let list0fNames2 = name.map(item => console.log(item.name));

         //con la funciones Flecha #2
        const list0fNames3 = ( name, age, country) => {
            //...;
        }

         //con la funciones Flecha #3
        const list0fNames4 = name => {
            //...
        }

         //con la funciones Flecha #4 Retorna un valor simplicado
        const square = num => num * num;