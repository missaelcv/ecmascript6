
//Sin ECS6
var lorem = "loren pulse .\n" + "Otra Frase epica que necesitamos."

//Con ECS6
var lorem2 = `Otra frase epica que necesitamos
ahora es otra frase epuca`;

console.log(lorem)

console.log(lorem2)

//Destruturar Elementos
var persona = {
    'name' : 'Missael',
    'age'  : 21,
    'country' : 'MX'
}

//Sin ECS6
console.log(persona.name, persona.age, persona.country);

//Con ECS6
var { name, age, country } = persona;
console.log( name, age, country);

//Operador de propagacion 
var team1 = ['missael', 'maria', 'maileny'];

var team2 = ['missael', 'maria', 'maileny'];

//Para unir elementos
var education = ['David',...team1,...team2];

console.log(education);

//Guardar el memoria
{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}
console.log(globalVar);

C
var a = 'b';
a = 'a';
console.log(a);
