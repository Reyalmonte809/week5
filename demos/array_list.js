// JAVASCRIPT ARRAYS

fruit = [] // array literal

x = 123
x = Number (123)

d = Date ()

text = "ABC" //string literal
text = String("ABC"); //constructor/factory function


fruit = ["apple", "banana", "cherry"]
console.log(fruit[2]) //cherry
fruit.push("pear")
fruit.push("orange")
fruit.push("grape")

console.log(fruit.length) //6

console.log(fruit.length -1) //grape
console.log(fruit.pop()) // removes last one from list
console.log(fruit)

for (let i = 0; i < fruit.length; i++) {
    console.log(i, fruit[i])
}




subtotals = [12, 21, 33]
// subtotals.push(300);

grandTotal = 100;

for (let i = 0; i < subtotals.length; i++) {
    grandTotal -= subtotals[i]
    console.log(i, subtotals[i], grandTotal)
}

console.log(grandTotal); //366


product = {
    "aaa": "Apple",
    "bbb": "Banana",
    "ccc": "Cherry",
}

full_text = product ["bbb"]
console.log(full_text, product["ccc"])

const person = {firstName: "Kevin", lastName: "Long"}
person.age = 56

console.log(person)
console.log(person.firstName, person.lastName, person.age);

function displayPerson(p){
    return `
    ${p.lastName}, ${p.firstName} (${p.age}) 
    `;
}


const dandy = {firstName: "dandy", lastName: "yankee poodle", age: "3" }
console.log(displayPerson(person))
console.log(displayPerson(dandy))


function printEmployeeAndPay(emp){
    console.log("Name: " + emp.name2);
    console.log("pay: " + emp.payRate);
}


let emp = {
    employeeId: "1",
    name2: "Ezra",
    jobTitle: "Theater teacher",
    payRate: 38.46
};

console.log(emp)
console.log(emp.name2, emp.employeeId, emp.jobTitle, emp.payRate)


let emp2 = {
    employeeId: "2",
    name2: "Elisha",
    jobTitle: "game programmer",
    payRate:43.27,
};

printEmployeeAndPay(emp);
printEmployeeAndPay(emp2);



function createPayStub (id, name, payRate, hoursWorked){
    let grossPay = 0;
    if (hoursWorked <= 40) {
        grossPay = payRate * hoursWorked;
    }else { (40 * payRate) + ((hoursWorked - 40) * 1.5 * payRate);
}

let payStub = { 
    employeeId: id,
    name2: name,
    grossPay: grossPay
};
return payStub;
}

let emp1PayStub = 
createPayStub("1", "Ezra", 38.46, 49)

console.log(emp1PayStub.name2 + " earned $" + emp1PayStub.grossPay.toFixed(2));