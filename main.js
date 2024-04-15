/*Strings, Numbers, Boolean, null, undefined

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

//Concatenation
console.log('My name is ' + name + ' and I am ' + age);
//Template String
console.log(`My name is ${name} and I am ${age}`);

const s = 'technology, computers, it, code';

console.log(s.split(', '));

//Arrays - variables that hold multiple values
const numbers = new Array(1, 2, 3, 4, 5);
const fruits = ['apples', 'oranges', 'pears'];

fruits.push('mangos'); //add a value to the end of the array
fruits.unshift('strawberries')//add a value at the beginning of the array
fruits.pop();//removes the last value of the array

console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));
console.log(fruits);

//Literals
const person = {
    firstName : 'John',
    lastName : 'Doe',
    age : 30,
    hobbies : ['music', 'movies', 'sports'],
    address : {
        street : '50 main st',
        city : 'Boston', 
        state : 'MA'
    }
}

person.email = 'john@gmail.com';

const todos = [
    {
        id : 1,
        text : 'Take out trash',
        isCompleted : true
    },
    {
        id : 2,
        text : 'Meeting with boss',
        isCompleted : true
    },
    {
        id : 1,
        text : 'Dentist appt',
        isCompleted : false
    }
];

const todoJSON = JSON.stringify(todos);

/*For
for (let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

//While
let i = 0;
while (i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for(let todo of todos) {
    console.log(todo.id);
}

//forEach
todos.forEach(function(todo) {
    console.log(todo.text);
});

//map
const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

//filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});

console.log(todoCompleted);

//filter+map
const todoCompletedText = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoCompletedText);

//Conditionals

const x = 6;
const y = 11;

if (x > 5 && y > 10) {
    console.log('x is more than 5 or y is more than 10');
}

const x = 10;

//const color = x > 10 ? 'red' : 'blue';
const color = 'green';
switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

//Functions
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNums(5, 5));

//Arrow Function
const addNums = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums(5, 5));

//Object Oriented Programming
//Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
//Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instanciate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-4-1970');

console.log(person2.getFullName());
console.log(person1);

//Single element selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

//Multiple element selectors
console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('.item'));
//console.log(document.getElementsByTagName('.item'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));
const ul = document.querySelector('.items');

//ul.remove()
//ul.lastElementChild.remove();
//ul.firstElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';
const btn = document.querySelector('.btn');

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = ('<h1>Hello</h1>')
});*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}