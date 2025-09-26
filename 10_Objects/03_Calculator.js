// 3 - Calculator
const calculator = 
{
    a: 10,
    b: 5,

    add: function() 
    {
        return this.a + this.b;
    },
    subtract: function() 
    {
        return this.a - this.b;
    },
    multiply: function() 
    {
        return this.a * this.b;
    }
}
console.log("Addition:", calculator.add());
console.log("Subtraction:", calculator.subtract());
console.log("Multiplication:", calculator.multiply());
