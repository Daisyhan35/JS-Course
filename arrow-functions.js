/* let hi = () => { console.log('howdy'); }
hi(); */

/* let hi = (name1) => { console.log(`howdy ${name1}`) };
hi('bob'); */

/* let add = (a, b) => { return a + b};
console.log(add(7, 3)); */

/* let names = ['david', 'eddie', 'alex', 'micheal' ];
names.map( (name) => { console.log(`howdy ${name}!`) } ); 
*/


/* let names = ['david', 'eddie', 'alex', 'micheal' ];
let i = 0;
names.map( (name) => { i++; console.log(`howdy ${name} ${i}!`) } ); */


let names = ['david', 'eddie', 'alex', 'micheal' ];
var transformed = names.map( (name) => { return `howdy ${name}!` });
console.log(transformed);



