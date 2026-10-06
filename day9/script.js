const contents = [];

function addItem() {
    const inputElement = document.getElementById("item-input");

    let currentItem = inputElement.value;

    if (currentItem == "") {
        return;
    }

    contents.push(currentItem);

    const listElement = document.getElementById("item-list");

    listElement.innerHTML = "";

    for(let i = 0; i < contents.length; i++)
    {
        let currentItem = contents[i];

        let htmlToInject = "<li>" + currentItem + "</li>";

        listElement.innerHTML += htmlToInject;
    }

    inputElement.value = "";
}
