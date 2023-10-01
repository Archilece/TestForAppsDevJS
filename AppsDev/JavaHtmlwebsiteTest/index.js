// let imgEmpire = document.createElement("imgEmp");
// let src = document.getElementById("Empire");
// imgEmpire.src = "Empire.png";
// src.appendChild(imgEmpire);

 // Function to append an image to a specified div by ID
 function appendImageToDiv(imageUrl, divId) {
    let div = document.getElementById(divId);
    if (div) {
        let img = document.createElement("img");
        img.src = imageUrl;

        img.style.maxWidth = 100 + "%";
        img.style.maxHeight = 100 + "%";
        div.appendChild(img);
    } else {
        console.error(`Div with ID '${divId}' not found.`);
    }
}

appendImageToDiv("pics/Empire2.jpg", "Empire");
appendImageToDiv("pics/highElves.jpg", "highElves");
