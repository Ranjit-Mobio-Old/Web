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
/*
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
*/

//Functions with parameters and return values
/*
function saysomething(phrase){
    console.log('You said ', phrase)
}

function getPhraseLength(phrase){
    var l = phrase.length
    return l
}
var p = 'This is a phrase'
saysomething(p)
var thisLength = getPhraseLength('This is a longer sentance')
console.log(thisLength)
*/

//Functions with multiple parameters 
/*
function saysomething(phrase){
    console.log('You said ', phrase)
}

function getPhraseLength(phrase,another){
    // var l = phrase.length + another.length
    var l = phrase.length

    if (typeof another !== "undefined") {
        l += another.length;
    }
    

    return l
}
var p1 = 'Longer sentence'
var p2 = 'shorter sentence'
var thisLength = getPhraseLength(p1)
console.log(thisLength)
*/

//Flexible function parameters
/*
function getPhrase(params) {
    var l = 0
    // var l = phrase.length + another.length
    if (typeof params.phrase !== "undefined") {
        var l = params.phrase.length
    }

    if (typeof params.another !== "undefined") {
        l += params.another.length;
    }


    return l
}
var p1 = 'Longer sentence'
var p2 = 'shorter sentence'
// var computed = getPhrase(another=p2)
var computed = getPhrase({ phrase: p1, another: p2 })
var computed = getPhrase({ phrase: '', another: p2 })
var computed = getPhrase({ another: p2 })
console.log(computed)
*/

// Exercise
/*
var numbers = [42, 54, 601, 100, 45, 10, 50, 34]
var words = ['Apple', 'pear', 'coconut', 'pizza', 'hamburger', 'banana']
var sorted_words = words.sort()
console.log(sorted_words)
var sorted_num = numbers.sort(function (a, b) { return a - b })
console.log(sorted_num)
*/

/*
function missingNumber(num) {
    var missing = -1
    for (var i = 0; i <= num.length - 1; i++) {
        if (num.indexOf(i) === -1) {
            missing = i
        }
    }
    return missing
}
var num = [3, 8, 7, 9, 6, 1, 10, 5, 4, 2, 19, 16, 18, 11, 10, 15, 13, 17, 20]
console.log(missingNumber(num));
*/

// Classes
class Animal {
    constructor(name, height, weight) {
        console.log('created animal name ', name);
        this.name = name
        this.height = height
        this.weight = weight

    }
    nameLength() {
        return this.name.length
    }

}
/*
Animal.planet = "Earth"

var dog = new Animal('Buzo',24,15)
var fish = new Animal('Goldi',2,02)

console.log(dog.nameLength())
console.log(fish.nameLength())

console.log(dog.constructor.planet)
*/
class Dog extends Animal {
    constructor(name, height, weight, barkvolume, leashcolor, speed) {
        super(name, height, weight)
        this.barkvolume = barkvolume
        this.leashcolor = leashcolor
        this.speed = speed
    }
    bark() {
        if (this.barkvolume > 50) {
            console.log(this.name, ' barks loudly (Volume:', this.barkvolume, ')')
        }
        else {
            console.log(this.name, ' barks timidely(Volume:', this.barkvolume, ')')
        }
    }
}

class Fish extends Animal {
    constructor(name, height, weight, swimSpeed) {
        super(name, height, weight)
        this.swimSpeed = swimSpeed
    }
    swim(chasserSpeed) {
        if (this.swimSpeed > 50) {
            console.log(this.name, ' swims around quickly (Speed:', this.swimSpeed, ')')
        }
        else {
            console.log(this.name, ' swims around slowly(Speed:', this.swimSpeed, ')')
        }
        if (this.swimSpeed > chasserSpeed) {
            console.log(this.name, ' caught away!')
        }
        else (
            console.log(this.name, ' was caught!')
        )
    }
}

var king = new Dog('King', 45, 92, 72, 'red', 52)
king.bark()

var Goldie = new Fish('Glodie', 2, 0.3, 43)
Goldie.swim(king.speed)