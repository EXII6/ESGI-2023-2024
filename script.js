document.addEventListener('DOMContentLoaded', function () {
    const addButtonElements = document.querySelectorAll('.add-item');
    const shoppingList = document.getElementById('shopping-list');

    addButtonElements.forEach(function (button) {
        button.addEventListener('click', function () {
            const itemText = this.textContent; 
            const listItem = document.createElement('li');
            listItem.textContent = itemText;
            shoppingList.appendChild(listItem);
        });
    });
});
