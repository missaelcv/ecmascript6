//Opciones 

const user = { };
//Con eso se evaluar para que no rompa el codigo en la app de forma 
//O termine de forma inesperada. donde no este disponible donde no se puede 
//Hacer la validacion 

console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email')
} else {
    console.log('fail');
}

