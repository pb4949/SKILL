/*
////----Assignment 8----////

// 1 - Multiplication table of number using for loop
let n = Number(prompt("Enter number: "))
let i = 0
let ogn = n;
for (i = 0; i < 10; i++)
{
    console.log(n)
    n += ogn;
}

// 2 - Print all even numbers between 1 to 50 using a while loop
let n = 1
for (n = 1; n <= 50; n++)
{
    if (n % 2 == 0)
        console.log(n)
}

// 3 - Sum of digits using do-while loop
let n = Number(prompt("Enter number: "))
let sum = 0
do 
{
    sum += n % 10
    n = Math.floor(n / 10)
} while (n != 0)
console.log(sum)

// 4 - Linear Search 
let ary = [11, 234, 13, 4432, 5, 6, 324, 48, 39, 610]
let i = 0
let n = Number(prompt("Enter number: "))
let flag = 0
for (i = 0; i < 10; i++)
{
    if (ary[i] == n)
    {
        console.log("Number found")
        flag = 1
        break
    }
}
if (!flag)
    console.log("Number not found")

// 5 - Print all integers upto 20 except multiples of 5
let i = 1
for (i = 1; i <= 20; i++)
{
    if (i % 5 == 0)
        continue
    console.log(i)
}

// 6 - Calculates Factorial of given number
function calcFac(n)
{
    if (n <= 1)
        return 1;
    else
        return n * calcFac(n - 1)
}
let n = Number(prompt("Enter number: "))
console.log(calcFac(n))

// 7 - Prime Number
let n = Number(prompt("Enter number: "))
let i
let flag = 0
for (i = 2; i < n; i++)
{
    if (n % i == 0)
    {
        console.log("Number is not prime")
        flag = 1
        break
    }
}
if (!flag)
    console.log("Number is prime")

////----Assignment 9---////

// 1 - Display Array
let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let i = 0
for (i = 0; i < 10; i++)
    console.log(ary[i])

// 2 - Max and Min Number in Array
let ary = [1, 2, 534, 4, 5, 6, -45, 8, 9, 10]
let i = 0
let max = 0
let min = 0
for (i = 0; i < 10; i++)
{
    if (ary[i] > ary[max])
        max = i;
    else if (ary[i] < ary[min])
        min = i;
    console.log(ary[i])
}

console.log("Max")
console.log(ary[max])
console.log("Min")
console.log(ary[min])

// 3 - Reverse Array
let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let i = 0
let t // temp
while (i < 5) // half the size of ary
{
    t = ary[i]
    ary[i] = ary[9 - i]
    ary[9 - i] = t
    i++
}
for (i = 0; i < 10; i++)
    console.log(ary[i])

// 4 - Linear Search
let ary = [11, 234, 13, 4432, 5, 6, 324, 48, 39, 610]
let i = 0
let n = Number(prompt("Enter number: "))
let flag = 0
for (i = 0; i < 10; i++)
{
    if (ary[i] == n)
    {
        console.log("Number found")
        flag = 1
        break
    }
}
if (!flag)
    console.log("Number not found")

////----Assignment 10----////

// 1 - Student
const student = {name: "John", age: 20, course: "CSE"}  
console.log(student.name)
console.log(student.age)
console.log(student["course"])

// 2 - Car
const car = {brand:"Ford", model:"F-150"}
console.log(car.brand)
console.log(car.model)
car.year = 2022
console.log(car.year)
car.model = "F-250"
console.log(car.model)
delete car.year

// 3 - Calculator
const calculator = 
{
    a: 10,
    b: 5,

    add: function() 
    {
        return this.a + this.b;
    },
    subtract: function() 
    {
        return this.a - this.b;
    },
    multiply: function() 
    {
        return this.a * this.b;
    }
}
console.log("Addition:", calculator.add());
console.log("Subtraction:", calculator.subtract());
console.log("Multiplication:", calculator.multiply());

// 4 - Person
const person = 
{
    name: "Alice",
    age: 25,
    city: "New York"
};
for (let key in person) // readjusts value of key every iteration to the variable name 
    console.log(key + ": " + person[key]); // concatenation opps

////----Assignment 11----////

// 1 - `'"Strings"'`
let a = 'single quotes, " " " "  ` can use double quotes here';
let b = "double quotes, ' ' ' ' ` can use single quotes here";
let n = 5354;
let c = 
`backtick quotes
can be formatted with new lines and even variables like ${n} very nice

and readable also can use " ' here without escape sequences unlike above but not \` backtick
`;
console.log(a);
console.log(b);
console.log(c);

// 2 - String Length
let a = prompt("Enter string: ");
console.log("Length of string was " + a.length);

////----Assignment 12----////

// 1 - Greet
function greet()
{
    console.log("Hello! I wish you a wonderful day");
}   
greet();
// 2 - Add
function add(a, b)
{
    return a + b;
}   
let a = Number(prompt("Enter a number: "));
let b = Number(prompt("Enter another number: "));
console.log("Sum is " + add(a, b));

// 3 - Square
function square(a)
{
    return a * a;
}   
let a = Number(prompt("Enter a number: "));
console.log("Square is " + square(a))

// 4 - Even or Odd
function isEven(n)
{
    if (n % 2 == 0)
        return true
    else
        return false
}
let n = Number(prompt("Enter Number: "));
if (isEven(n))
    console.log("Even");
else
    console.log("Odd");

// 5 - Factorial (iterative)
function factorialIterative(n)
{
    let i = 1;
    let fac = 1
    for (i = 1; i <= n; i++)
        fac *= i;

    return fac;
}
let n = Number(prompt("Enter number: "));
console.log("Factorial is " + factorialIterative(n));

// 6 - Default Parameters in Functions
function rectangleArea(l = 1, b = l)
{
    return l * b;
}

let l = Number(prompt("Enter length: "));
let b = Number(prompt("Enter breadth: "));

console.log(rectangleArea(l, b));
console.log(rectangleArea(l)); // Works like calculating area for square
console.log(rectangleArea);
*/
