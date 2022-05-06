//Metodo Publico
class Message { 
    show(val) {
        console.log(val);
    };
}

const message = new Message();
message.show('Hola!!!')

//Metodo Privado
class Message { 
    #show(val) {
        console.log(val);
    };
    get //#add(val){
    }

const message1 = new Message();
message.show('Hola 2 !!!')