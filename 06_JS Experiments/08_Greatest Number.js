let n1 = Number(prompt("Enter first number: "))
let n2 = Number(prompt("Enter second number: "))
let n3 = Number(prompt("Enter third number: "))

let ary = [n1, n2, n3]
let i = 0
let max = 0
for (i = 0; i < 3; i++)
    if (ary[max] < ary[i])
        max = i

console.log("Greatest Number is", ary[max])
