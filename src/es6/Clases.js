class calculator {

        //Construtor
        constructor(){
            this.valueA = 0; 
            this.valueB = 0;
        }

       // Funcion Suma
        sum(valueA,valueB) {
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB;
        }
}
        const calc = new calculator();
        console.log(calc.sum(2,2));

        //Importando desde modules.js
        import { hello } from './module';
        
        //LLamando la funcion
        hello();

