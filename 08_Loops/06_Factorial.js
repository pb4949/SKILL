function calcFac(n)
{
    if (n <= 1)
        return 1;
    else
        return n * calcFac(n - 1)
}
let n = Number(prompt("Enter number: "))
console.log(calcFac(n))
