let sub1 = Number(prompt("Enter Percentage of Subject 1: "))
let sub2 = Number(prompt("Enter Percentage of Subject 2: "))
let sub3 = Number(prompt("Enter Percentage of Subject 3: "))

let perc = (sub1 + sub2 + sub3) / 3
console.log("Total Percentage: ", perc)
console.log("")

if (perc >= 90)
    console.log("Grade A")
else if (perc >= 75)
    console.log("Grade B")
else if (perc >= 50)
    console.log("Grade C")
else
    console.log("Grade D")
