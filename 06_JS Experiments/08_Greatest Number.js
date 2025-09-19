let n1
let n2
let n3

n1 = Number(prompt("Enter first number: "))
n2 = Number(prompt("Enter second number: "))
n3 = Number(prompt("Enter third number: "))

let ary = [n1, n2, n3]
let i = 0
let max = 0
for (i = 0; i < 3; i++)
    if (ary[max] < ary[i])
        max = i

console.log("Greatest Number is", ary[max])
