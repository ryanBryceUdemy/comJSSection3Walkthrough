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

//hoisting with variables

//follows what you would expect to happen
// var age = 24;
// console.log(age);

//gets set to undefined. because of hoisting the VO in the creation fase scans for variable declarations
//and knows about the variable named age, but the varable will not get assisined a value yet.

// console.log(age);
// var age = 24;









///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
