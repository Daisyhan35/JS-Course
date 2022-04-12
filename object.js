
let car = {
    make: 'bmw',
    model: '7451i',
    year: 2010,
    getPrice: function() {
        // perform some calc
        return 5000;
    },
    printDecription: function() {
        console.log(this.make + ' ' + this.model);
    }
}

car.printDecription();
console.log(car.year);

// console.log(car['year']);
// console.log(car[1]);

/* 
var anotherCar = {};
anotherCar.whatever = 'bob';
console.log(anotherCar.whatever); 
*/

/* 
var a = {
    myProperty: {b: 'hi'}
};
console.log(a.myProperty.b); 
*/

/* 
var c = {
    myProperty: [
        {d: 'this'},
        {e: 'can'},
        {f: 'get'},
        {g: 'crazy'}
    ]
}; 
*/

let carlot = [
    {year: 2017, make: 'Toyota', model: '4Runner'},
    {year: 2015, make: 'BMW', model: '528i'},
    {year: 1982, make: 'Buick', model: 'skylark'},

]; 

let contacts = {
    customers: [
        { firstName: 'Bob', lastName: 'Tabor', phoneNumber: [ '(123) 456-7890', '(123) 567-8901' ] },
        { firstName: 'Richard', lastName: 'Boughton', phoneNumber: [ '(123) 555-7894', '(123) 555-8903' ] }

    ],
    employees: [
        { firstName: 'Steve', lastName: 'Jamoski', phoneNumber: [ '(312) 456-7890', '(312) 567-8901' ] },
        { firstName: 'Conrad', lastName: 'Tabor', phoneNumber: [ '(312) 456-7890' ] },
        { firstName: 'Grant', lastName: 'Tabor', phoneNumber: [ '(312) 456-7890', '(123) 567-8901' ] }


    ]
};