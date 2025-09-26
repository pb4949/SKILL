let n = Number(prompt("Enter Number: "))

if (n % 1 != 0)
    console.log("Number is a decimal, doesn't apply")
else if (n % 2 == 0)
    console.log("Number is even")
else
    console.log("Number is odd")
