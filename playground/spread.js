// function add(a, b){
//     return a + b;
// }

// console.log(add(3,1))

// var toAdd = [9,5];
// console.log(add(...toAdd))

// var groupA =  ['Jen', 'Cory']
// var groupB = ['Vikram']
// var final = [...groupB, 3, ...groupA]

// console.log(final)

var person = ['pao', 25];
var personTwo = ['jen', 29]

function greet( name, age){
    console.log('Hi' + name + ', you are '+ age)
}
greet(...person)
greet(...personTwo)

var names = ['Mike', 'ben']
var final = ['Andrew', ...names]

final.forEach(function(name){
    console.log('Hi ' + name)
})