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
