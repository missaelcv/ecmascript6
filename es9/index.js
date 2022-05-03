const obj = {
    name: 'missael',
    age: 28,
    country: 'Mx'
};

let { name,...all } = obj;
console.log(all);