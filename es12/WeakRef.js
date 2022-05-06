class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
   // { }
}

let isTrue = true;
let isFalse = false; 
console.log(isTrue &&= isFalse);

let isTrue1 = true;
let isFalse1 = false; 
console.log(isTrue ||= isFalse);

let isTru2 = true;
let isFalse2 = false; 
console.log(isTrue ??= isFalse);