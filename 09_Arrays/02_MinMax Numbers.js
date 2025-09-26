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
console.log("\nMax")
console.log(ary[max])
console.log("Min")
console.log(ary[min])
