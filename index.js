console.log('welcome to thirty days of javascript');

/*string data type*/
let myString ="javascript";
console.log(myJavascript);  //javacript

//string concatenation
//Connecting two or more strings together is called concatenation. 
let firstName="abela";
let lastName="achieng";

let fullName="firstName+space+lastName";
console.log(fullName);

//Accessing characters in a string: We can access each character in a string using its index. In programming, counting starts from 0. The first index of the string is zero, and the last index is the length of the string minus one.
let string='javascript'
firstLetter=[0]
console.log(firstLetter)

/*boolean*/

let lightOff = " false";
let lightOn = "true";
console.log(lightOn); //true

/*Array*/
//An array is a list of data values in a square bracket.
let nums=[0,1,3]
nums=10
console.log(nums);  //10,1,3

//javascript type conversion.
// Type conversion is the process of converting data of one type to another. for example converting styring to another number.
let result;
result = "3" + 2;
console.log(result)// string

//javascript comparison operators

const a = 3, b = 2;
console.log(a>b);

//Javascript Logical operators
const x = 5, y = 3;
console.log((x<6) && (y<5))// logical and returns true if both the expressions are true hence the statement above is false.

if statement 
// if .. else statement is used to execute/ skip a block of code based on condition.
let score = 45
if(score>=50){
    console.log("you passed the examination")
}
else{
    console.log("You failed the examination")
} 

console.log(1)
console.log(2)
setTimeout(()=>{
    console.log('callback function fired.')
}, 2000)
console.log(3)
console.log(4)