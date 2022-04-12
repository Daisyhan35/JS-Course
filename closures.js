function sayHello(name) {
    return function() {
        console.log('howdy ' + name) ;
    }
}

let bob = sayHello('bob');
let comrad = sayHello('comrad');
let grant = sayHello('grant');

grant();
comrad();
bob();

