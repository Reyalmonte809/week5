let myInfo = {
    name : "Kevin Long",
    address : "121 main street",
    city : "Benbrook, ",
    state : "Texas ",
    zip : "76126",
}

function printContact(c) {
    console.log(`
    ${c.name}
    ${c.address}
    ${c.city + c.state + c.zip}`)
}

printContact(myInfo)







function parsePartCode(partCode) {

    return{
        supplierCode: "someValue",
        productNumber: "someValue",
        size: "someValue"
    }
}

let partCode1 = "xyz-1234-L";
let part1 = parsePartCode(partCode1);

console.log( "Supplier " + part1.supplierCode + " Product Number: " + part1.productNumber + " size " + part1.size); 