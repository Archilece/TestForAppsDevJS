let cakeOptions = [
    { name: "Chocolate Cake", price: 90.00 },
    { name: "Vanilla Cake", price: 80.00 },
    { name: "Blue Berry Cake", price: 120.00 }
];

let coffeeOptions = [
    { name: "Ëspresso", price: 50.00 },
    { name: "Blend", price: 80.00 },
    { name: "Americano", price: 70.00 }
];

const addOptions = (selectId, opt) => {
    let select = document.getElementById(selectId);
    opt.forEach(option => {
        let optionElement = document.createElement("option");
        optionElement.text = option.name;
        select.add(optionElement);
    });
}
addOptions("cakeSelect", cakeOptions);
addOptions("coffeeSelect", coffeeOptions);

// STILL WORKING THIS 
const cakeSelect = document.getElementById("cakeSelect");
const coffeeSelect = document.getElementById("coffeeSelect");

cakeSelect.addEventListener("change", () => {
    const selectedOptions = Array.from(cakeSelect.selectedOptions).map(option => option.text);
    console.log("Selected Cake Options:", selectedOptions);
});

coffeeSelect.addEventListener("change", () => {
    const selectedOptions = Array.from(coffeeSelect.selectedOptions).map(option => option.text);
    console.log("Selected Coffee Options:", selectedOptions);
});


