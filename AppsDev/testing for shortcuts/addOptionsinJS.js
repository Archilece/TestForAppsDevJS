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

// In HTML just ADD
{/* <select name="cakeSelect" id="cakeSelect" multiple>
<!-- HOW TO ADD OPTIONS? -->
</select>
<h2>Coffee</h2>
<select name="coffeeSelect" id="coffeeSelect" multiple>
<!-- HOW TO ADD OPTIONS? -->
</select> */}