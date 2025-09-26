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
