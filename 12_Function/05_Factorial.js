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
