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
