
//Putting notification on the welcome page
alert("Hello world");
//Print Hello... string on the console log of the browser
console.log('Hello...');



//let can be used to reaasign value
//this is one of example of reassigning value
//var, let, const
 let x=5;

const z=5;


//console log is a method of displaying output in console of the browser
//how to open console: right-click on the webpage->inspect/inspect element->Find console in the inspect menu
console.log(x)
console.log(z)


//looping with traditional way

//this loop will print the i variable
//i is gonna loop from zero to nine because i set the parameter to <10
//you cant loop to i=10 as if the number has reached 10 it will do infinite loop

 for(const i=0;i<10;i++){
     console.log(i)
 }


//Data type
//string is declared with "" and number is declared without ""
  const name ="Finola";
  let age = 19.51;

//2 format of concattenation (putting >1 variables as one variable/line)
const hello =`My name is ${name} and im ${age} years`;
const txt = "My name is "+name+" And im: "+age;

//method to outputting data in html instead of console
//this method will output the data to the html ID
document.getElementById("demo").innerHTML=txt;

//theres also couple more methods of outputting the data to html

//this method will output the data to the html ClassName
//document.getElementsByClassName()
//this method will output the data to the html name/id attribute
//document.getElementsByName()

//method to check the txt length
let a = txt.length
console.log(a);
console.log(age);
//type of is outputting the data type of a variable
console.log(typeof name);
console.log(typeof age);

//toString is a method to convert number to string
let c = age.toString;
console.log(c)

//array of characters
const a ="Good morning world, morning everybody,good morning";
var b = a.indexOf('morning',0)
console.log(a[1]);

//method to get date on user system (some browser able to output the timezone and some can't)
//let date = new Date();

//grab demo element and output to html
document.getElementById("demo").innerHTML= date;


//array of string
let cities=['Jakarta','Newyork','Frankfurt','Kuala Lumpur']
//method to push new string to the first element of the array and push the current existing element to next place n->n+1
 cities.unshift('Medan');

//output the whole arrays to console with default console format
//REMEMBER that you can output to html instead but i do in console for sake of simplicity and timely manner
console.log(cities);

//method to delete the last element of the array
cities.pop();
console.log(cities);
console.log(Array.isArray(cities));
//i create a new array and combine the cities and Indo array into a new array
let Indo =['West Jakarta', 'Medan','Bandung'];
//the method to concattenate/combine 2 array
let newArr=cities.concat(Indo);
console.log(newArr)


//Object Literals
//this is an object and the hobbies contain array
const person ={firstName:'Phil',
lastName:'Collins',
age: 30,
hobbies:['Sport','Motorsport','Music'],
address:{
    street:'Jl. Mh Thamrin no.1', city:'Jakarta'
}
}

//you can output all person element in default format like this
console.log(person);

//you can also output the certain element in the person object
 console.log(person.hobbies);

 //method to add new subobject in the object literals
person.email='phil@outlook.com'



//This is an array of objects 
//array that contain objects
const list = [
    {
        id:1,
        text:'Learn to code',
        isDone:false
    },
    {
        id:2,
        text:'Go eat at mall',
        isDone:true
    },
    {
        id:3,
        text:'Lawn the Garden',
        isDone:true
    }
]
//method to grab objects in index 1
console.log(list[1]);

console.log(list[0].text);
//def methods to print whole array
console.log(list);

//method to only grab one subobject in the array
for (let i=0;i<list.length;i++){
console.log(list[i].isDone);
}



//foreach loop
list.forEach(function(new1){
    console.log(new1)
});

//Map == returning an array element into a new array sets
//map is a type of looping method
let new3 = list.map(function(new2){
    return new2.text;
});

console.log(new3);

//array of objects
var persons = [
    {firstName:'Ryan', lastName:'Reynolds'},
    {firstName:'Dwayne', lastName:'Johnson'},
    {firstName:'Jack',lastName:'Martin'}
];

//method to concat/combine firstName and lastName 
function getFullName(a){
    var fullName = [a.firstName,a.lastName].join(" ");
    return fullName;
}

//method to displaying the combined/concatted elements
function myfunc(){
    document.getElementById("demo1").innerHTML=persons.map(getFullName);
}
//you need to call the function so the function could run
myfunc();


const hasComps = list.filter(function(a){
return a.isDone == true
}).map(function(b){
    return b.text;
})

document.getElementById("demo1").innerHTML=hasComps

//If else statement
if (a===5){
console.log ("True");
}
else{
console.log("False");
}

const x=11;
const y =3;

if (x>10 || y<5){
    console.log("X is bigger than 10 ")
}


//Ternary Operator
let x=13;

// how to read this?
// 'x>10?' equal to is the variable >10 ?
//if its true the color variable will be blue
//if its false then it will be green
const color = x>10? 'blue':'green'



//first example of switch operator (with string as the case)
switch (color){
    case 'blue':
        console.log("the color is blue");
        break;
        // case 'green':
        //     console.log("the color is green");
        //     break;
        default:
            console.log("The color is not blue");
            break;
}

//second example of switch operator (with integer as the case)
switch(x){
    case 9:
        x=x*2;
        console.log(x);
        break;
    case 10:
        x=x/2;
        console.log(x);
        break;

    default:
        console.log(x);
        break;
}

//switch case with day as the integer
//the day function starts from sunday which has value of 0 and ends in saturday which has value of 6
let day = new Date().getDay();

switch (day) {
    case 0:
        day= "sunday"
        break;
    case 1:
        day="Monday";
        break;
    case 2:
        day="Tuesday";
        break;
    case 3:
        day="Wednesday";
        break;
    case 4:
        day="Thursday";
        break;
    case 5:
        day="Friday";
        break;
    case 6:
        day="Saturday";
        break;
}

console.log(day);

// function str(str1, str2){
//     if (str1===str2){
//         console.log("First string is equal to second string");
//     }
//     else
//     console.log("The first string is not equal to second");
// }

// let a1= "cars";
// let a2="cars";

// str(a1,a2);

//make function (in java it called as static void)
//Its a set of code that built to run a certain function
//I make this to compare 2 string
function str(str1, str2){
    // '==' only compares the content of the variable and doesnt compare the data type
    //'===' compare both the content of the variable and data type thats inside the variablle
    if (str1===str2){
        return("First string is equal to second string");
    }
    else
    return("The first string is not equal to second");
}

//initializing first and second str for the function
let a1= "cars";
let a2="cars";

//i called the function and output it onto console
//You can also output the variable to HTML class/id
console.log(str(a1,a2));

//constructor
function Person(firstName, lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);


    // this.getBirthyear = function(){
    //     return this.dob.g;

    // }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }

}

//prototype its a constructor but it didnt get access to a method/variable inside the constructor class
//it can only obtain data from the object (Initialized data)
//i make this prototype to return the year of constructor data DOB
Person.prototype.getYear = function(){
    return this.dob.getFullYear();
}

//Initializing constructor
const person1 = new Person('James','May','1-1-1990');
//output the constructor data to console
console.log(person1);
//output specific data inside the constructor
console.log(person1.dob);

//calling the prototype and output the data to console
console.log(person1.getYear());
