// Single Line Comment

/*
    Multi line comment
*/

// alert("This is Alert!!")
// console.log("Written in console")



// Variables in JavaScript
/*
var welcome_message = "This is a welcome message"
var age = 21
var exact_age = 21.4
alert(welcome_message + ' ' +(age+exact_age))
*/

// Undefined variables and modifying values of variables
/*
var age = 21
var myName = "Ranjit"
console.log('My age is' + ' '+ age)
console.log('My age next year will be '+ (age+1))
age++
console.log('My age next year will be '+ age++)
age--
console.log('My age last year will be '+ age--)
console.log('My name is '+ myName)
*/

// Boolean Operators
/*
var iLikeCheese = true
undefined
iLikeCheese = true
true
iLikeCheese = "true"
'true'
iLikeCheese == "true"
true
iLikeCheese == "false"
false
iLikeCheese =false
false
*/

// Comparing Values
/*
true == true
true
"hi" == "hi"
true
"hi" == 3
false
var myNum = 6
undefined
myNum
6
var isPrimeUser = false
undefined
isPrimeUser != true
true
5 > 7
false
5 >= 5
true
*/

// If-Else Statement
/*
var isPrimeUser = false
var isPrimeUser = true
var isPrimeUser = "false"
var isPrimeUser = false
if (isPrimeUser == true) {
    console.log('Thanks for being a loyal customer');
}
else {
    console.log('Subscribe to premium!')
}

var myAge = 21
 if (myAge < 1) {console.log('You are a baby')}
 else if (myAge < 3) {console.log('You are a toodler')}
 else if (myAge <= 18) {console.log('You are a teenager')}
 else{console.log('Not in records');}
*/

// For Loop
/*
for (var i=0; i < 10; i++){
    console.log('Current i ' + i);
}
*/

// function
/*
function myname () {
    let name = "Ranjit";
    console.log('My name is ' + name);
}
myname()

function mydetail (name,age) {
    console.log('Your name is ' + name + ' Your age is ' + age);
}

mydetail("Ranjit",21)
*/

// Event Handling
/*
var btn = document.getElementById('go-button')
function buttonClicked () {
    console.log('Button Clicked!');
    btn.removeEventListener('click',buttonClicked);
    document.getElementById("text").innerHTML = "Don't do it!!";
    console.log(document.getElementById("text")).innerHTML;
}

btn.addEventListener("click",buttonClicked)
*/

// innerHTML
/*
var btn = document.getElementById('go-button')
function buttonClicked () {
    console.log('Button Clicked!');
    btn.removeEventListener('click',buttonClicked);
    document.getElementById("text").innerHTML = "Don't do it!!";
    // let a = document.getElementById("text").innerHTML
    console.log((document.getElementById("text")).innerHTML)  //gives error
    // console.log(a)
}

btn.addEventListener("click",buttonClicked)
*/

// Array
/*
var btn = document.getElementById('go-button')
function buttonClicked() {
    console.log('Button Clicked!');
    btn.removeEventListener('click', buttonClicked);
    document.getElementById("text").innerHTML = "Don't do it!!";
    // let a = document.getElementById("text").innerHTML
    console.log((document.getElementById("text")).innerHTML)  //gives error
    // console.log(a)
}
btn.addEventListener("click", buttonClicked)
*/

// Array Part 1
/*
var hobbies = ["pizza", "reading", "programming", "music"]
// console.log('I no longer enjoying', hobbies.pop())
hobbies.push('archary')
*/

//Array Part 2
/*
var hobbies = ["pizza", "reading", "programming", "music"]
console.log(hobbies)
hobbies.shift()
console.log(hobbies)
hobbies.unshift('playing')
console.log(hobbies)
hobbies.forEach(function(items,index){
    console.log('I like ',items
    ,index);
})
*/

// Array Part 3
/*
var hobbies = ["pizza", "reading", "programming", "music"]

if(hobbies.indexOf('reading') >- 1){
    console.log('I like reading')
}

if(hobbies.indexOf('sports') === -1) {
    console.log('not in array')
}
*/

// Textarea and getting the values of input

var btn = document.getElementById('go-button')
function buttonClicked() {
    console.log('Button Clicked!');
    var customText = document.getElementsByClassName("myinput")
    var results = document.getElementById("text");
    var text_area = document.getElementsByClassName('my-textarea')
    results.innerHTML = "Hello, " + customText[0].value + "<br>";

    results.innerHTML += "Message: " + text_area[0].value


}
btn.addEventListener("click", buttonClicked)


