let a = Number(prompt("Enter number 1: "))
let b = Number(prompt("Enter number 2: "))
let ch = Number(prompt("1 2 3 4 for + - * /: "))

switch (ch)
{
    case 1:
        console.log(a + b)
        break;
    case 2:
        console.log(a - b)
        break;
    case 3:
        console.log(a * b)
        break;
    case 4:
        console.log(a / b)
        break;
    default:
        console.log("INVALID CHOICE")
        break;
}
