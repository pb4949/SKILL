function rectangleArea(l = 1, b = l)
{
    return l * b;
}

let l = Number(prompt("Enter length: "));
let b = Number(prompt("Enter breadth: "));

console.log(rectangleArea(l, b));
console.log(rectangleArea(l)); // Works like calculating area for square
console.log(rectangleArea);
