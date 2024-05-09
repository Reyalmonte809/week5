// const window = {
//     document: {
//         body: {
//             children: [
//                 {
//                     tag: "ul",
//                     children: [
//                         {
//                             tag: "li",
//                             innerText: "AAA"
//                         },
//                         {
//                             tag: "li",
//                             innerText: "BBB"
//                         },
//                         {
//                             tag: "li",
//                             innerText: "CCC"
//                         },
//                     ]
//                 }
//             ]
//         }
//     }
// }


list = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];


console.log(list[2])


let sheet = []

for (r = 0; r < 1000; r++) {
    let row = []
    for (c = 0; c < 26; c++) {
        row.push(".")
    }
    sheet.push(row)
}

console.log(sheet.length)
console.log(sheet[0].length)





familyNames = ["Rob", "Tiffany", "Justin", "Emilio"]

for (i = 0; i < familyNames.length; i++) {
    console.log(familyNames[i])
}



let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(myScores) {
    // for ()
    let scores = []
    console.log(getAverage(scores))
}



// let teams = ["Red Sox", "Rangers", "Blue Jays", "Astros", "White Sox", "Rangers"]

// let index = teams.indexOf("Rangers");
// if (index == -1)
//     console.log("Item not Found");
// else 
// console.log("Items at position: " + index); // the first one was picked

let teams = ["Red Sox", "Rangers", "Blue Jays", "Astros", "White Sox", "Rangers"]
let firstIndex = teams.indexOf("Rangers")
let lastIndex = teams.lastIndexOf("Rangers")

let index = teams.indexOf("Rangers", 3);
if (index == -1)
    console.log("Item not Found");
else
    console.log("Items at position: " + index); // the second one was picked
console.log(firstIndex, lastIndex)


let menu = [
    { id: 1, item: "Tacos", category: "Meal", price: 12.29 },
    { id: 2, item: "Burger", category: "Meal", price: 7.29 },
    { id: 3, item: "Salad", category: "Meal", price: 8.29 },
    { id: 4, item: "Ice tea", category: "Drink", price: 2.19 },
    { id: 5, item: "Coke", category: "Drink", price: 2.29 },
];

function getMenuItemsInCategory(menu, category) {
    let matching = [];
    let numItems = menu.length;
    for (let i = 0; i < numItems; i++) {
        if (menu[i].category == category) {
            matching.push(menu[i]);

        }
    }
    return matching;
}
let drinks = getMenuItemsInCategory(menu, "Drink");
let numDrinks = drinks.length;
for (let i = 0; i < numDrinks; i++) {
    console.log(drinks[i].item +
        " $" + drinks[i].price.toFixed(2));
}

let meal = getMenuItemsInCategory(menu, "Meal");
let numCat = meal.length;
for (let g = 0; g < numCat; g++){
    console.log(meal[g].item);
}
