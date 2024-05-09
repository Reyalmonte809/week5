// window.onload = function () {
//     let states = ["Alabama", "Alaska", "Arizona"];
//     let abbrev = ["AL", "AK", "AZ"];

//     const stateList = document.getElementById("stateList");

//     let length = states.length;
//     for (let i = 0; i < length; i++) {
//         let theOption = document.createElement("option");
//         theOption.textContent = states[i];
//         theOption.value = abbrev[i];
//         stateList.appendChild(theOption)
//     }
// }





// const football = [
//     {id:111, name: "Buccaneers"},
//     {id:222, name: "Giants"},
//     {id:333, name: "49ers"},
//     {id:444, name: "Eagles"},
// ];

// const info = [
//     {cat:111, id:1111, name: "Tampa Bay Bucs"},
//     {cat:222, id:2222, name: "New York Giants"},
//     {cat:333, id:3333, name: "San Franciso 49ers"},
//     {cat:444, id:4444, name: "Philidelphia Eagles"},
// ];

window.onload = function () {
    let teams = [
        { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
        { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
        { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
        { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
    ]


    const teamList = document.getElementById("menu")



    for (t of teams) {
        const opt = document.createElement("option");
        opt.value = t.code;
        opt.innerText = t.name;

        menu.appendChild(opt);

    };
    menu.addEventListener("change", (event) => {
        for (t of teams) {
            if (menu.value == t.code) {
                const buttonElement = document.createElement("button");
                buttonElement.innerText = "CLICK";
                document.body.appendChild(buttonElement);
                details.innerText = t.name;

            }
        };
    });
}