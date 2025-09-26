const person = 
{
    name: "Alice",
    age: 25,
    city: "New York"
};
for (let key in person) // readjusts value of key every iteration to the variable name 
    console.log(key + ": " + person[key]); // concatenation opps
