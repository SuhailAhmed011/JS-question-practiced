// 1. What is Higher Order Function?
// It is a function that accepts another function in parameter or return function.

// syntax of accept function in parametre 
function highOrder(){

}

highOrder(function(){

});

// syntax of return function 
function hello(){
 return function(){

 }
}
hello();


// 2. What is Constructor?
// It is used when we need many element of same properties than we used it.

function songs(artist){
    this.artist = artist;
    this.thumbnail = false;
    this.heigth = 12;
}

let song1 = new songs('arijit singh');
let song2 = new songs('a.r rehman');
let song3 = new songs('sonu nigam');

// 3. what is first class function?
// It is a that type of a function that we can stored in the variable.

let a = function abcd(){

}
// The best example of first class function is setTimeOut let's see

setTimeout(function(){
    
})

// 4. what is iife? immediatly invoked function expression
// It means that tom immediatlt start function, to create a private value, let's see

let ans = (function(){
    let privateL = 15;

    return{
        getter: function(){
            console.log(privateL);
        },
        setter: function(val){
            privateL = val;
        }
    }
})()

// 5. what is prototype inheritence?
// Prototype inheritence is just a built in methods or properties created by its creator to code easily.

// 6. What is prototype inheritence?
// It is used for copy the properties of parent prototype to its children.
let human = {
    canFly: false,
    canTalk: true,
    canWalk: true,
    haveEmotions: true,
    hasFourLegs: false
}

let suhail = {
    canMakeAmazingWebsites: true,
    canMakeAwesomeAnimations: true
}

suhail.__proto__ = human;


// this keyword
// it is a special keyword in the javascript

function abcd(){
    console.log(this);
}
abcd();

// aisa function jo object andar ho use method kehte hai naa ki function let's see
// this values in different cases
// global variable = window
// function = window
// method = object

let obj={
    name: "suhail",
    talk: function(){
        console.log(this);
    }
}
obj.talk(); 

// DOM ke andar this value wahi return karega jo addeventlistner se pehle mtlb jisko apn target kr rahe hai

let button = document.querySelector("button");
button.addEventListener("click", function(){
   this.style.background = "red";
}) 

// Call 
// if we have to direct this to get a value as a user we use call let's see

function abcd(){
    console.log(this.age)
}
let obj1 = {age:21, name:"suhail"}
abcd.call(obj1);

// Apply- it is same as call little difference it allows only two parametres one for this and second for parameters. let's see 

function abcd(val1, val2, val3){
    console.log(this, val1, val2, val3)
}
let obj2 = {age:21, name:"suhail"}
abcd.apply(obj2, [1,2,3]); 

// bind ekdum se chalne ke lie use nhi hota function ko it takes time

function abcd(){
    console.log(this)
}
let obj3 = {age:21, name:"suhail"}
let blindly = abcd.bind(obj3)
blindly();




