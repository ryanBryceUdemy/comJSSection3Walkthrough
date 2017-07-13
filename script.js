///////////////////////////////////////
// Lecture: Hoisting


// hoisting with functions
//oisting with function definitions


//how i thought function declarations worked before hoisting knowlege
// function calculateAge (year) {
//   console.log(2017 - year);
// }
//
// calculateAge(1992)


//still works because function declarations get stored in the VO before code execution/invocation
// calculateAge(1981)
//
// function calculateAge (year) {
//   console.log(2017 - year);
// }


//hoisting with function expressions


//with a function expression the code gets executed top from bottom. Because of the var keyword,
//the function only exists once the window obj is ready to be exicuted/invoked.
// var retirement = function (year) {
//   console.log(65 - (2017 - year));
// }
// retirement(1992)

//since its a expression, it will
// not exist (undefined/ not a function) until the exicution block AKA: window obj is exicuted/invoked .

// retirement(1992)
//
// var retirement = function (year) {
//   console.log(65 - (2017 - year));
// }
// console.log(age);
// var age = 25;
// function foo() {
//   var age = 65;
//   console.log(age);
// }
// console.log(window);
//
// function foobar() {
//   foo()
// }
//hoisting with variables

//follows what you would expect to happen
// var age = 24;
// console.log(age);

//gets set to undefined. because of hoisting the VO in the creation fase scans for variable declarations
//and knows about the variable named age, but the varable will not get assisined a value until execution.

// console.log(age);
// var age = 24;









///////////////////////////////////////
// Lecture: Scoping


// First scoping example

// console.log(first);
// var a = 'Hello!';
// first();
//
// function first() {
//     var b = 'Hi!';
//     second();
//
//     function second() {
//         var c = 'Hey!';
//         //this is only allowed because of lexical scopeing.
//         //function second has acess to both func first and the window obj variable object
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        //this call works because of lexical scopeing. it has acess to the third function
        //because of lexical scopeing on the scope chain.
        third()
    }
}

function third() {
    var d = 'John';
    //the console log below wont work because of lexical scoping, its still in the window context obj.
    //beecause of scope it can not go into a function and access the function's variables. because they or stored in
    //a different context obj which has its own scope. however, we could return both variables and access them that way.
    // console.log(a + b + c + d);
    console.log(a, d);

}




///////////////////////////////////////
// Lecture: The this keyword
