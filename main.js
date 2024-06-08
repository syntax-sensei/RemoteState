const ITEMS_CONTAINER = document.getElementById("items");
const ITEM_TEMPLATE = document.getElementById("item-template");
const ADD_BUTTON = document.getElementById("Add");

let items = getItems();

function getItems() {
  const value = localStorage.getItem("todo") || "[]";
    return JSON.parse(value);

}

function setItems(items){
    const itemsJson = JSON.stringify(items);
    localStorage.setItem("todo", itemsJson);
}

function addItem(){
    items.unshift({
        description:"",
        completed:false
    });

    setItems(items);
    refreshlist();
}

function updateItem(item, key, value){
    item[key] = value;
    setItems(items);
    refreshlist();

}

function refreshlist(){

    

    ITEMS_CONTAINER.innerHTML = "";

    for(const item of items){
        const itemElement = ITEM_TEMPLATE.content.cloneNode(true);
        const descriptionInput = itemElement.querySelector(".item-description");
        const completedInput = itemElement.querySelector(".item-completed");

        descriptionInput.value = item.description;
        completedInput.checked = item.completed;

        descriptionInput.addEventListener("change", () => {
            updateItem(item, "description", descriptionInput.checked);
        });

        completedInput.addEventListener("change", () => {
            updateItem(item, "completed", completedInput.checked);
        });

        ITEMS_CONTAINER.append(itemElement);

    }

}

ADD_BUTTON.addEventListener = ("click", () => {
    addItem();
});

refreshlist();




