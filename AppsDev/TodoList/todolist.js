let addItem = document.getElementById("addItemBtn");
let todoList = document.getElementById("todo-list");
let deleteButton = document.getElementById("delBtn");
let toggleButton = document.getElementById("toggle");

addItem.addEventListener("click",() => {
    let item = document.getElementById("addItem").value;
    let list = document.createElement("li");
    list.textContent = item;
    todoList.appendChild(list);
    document.getElementById("addItem").value = "";

    list.addEventListener("click", () => {
        list.classList.toggle("selected");
        console.log(item);
    });
})



deleteButton.addEventListener("click", () => {
    let selectedItems = document.querySelectorAll(".selected");
    selectedItems.forEach((item) => {
        todoList.removeChild(item);
    });
});


toggleButton.addEventListener("click", () => {
    if (todoList.style.display === "none") {
        todoList.style.display = "block";
    } else {
        todoList.style.display = "none";
    }
});
