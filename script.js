const form = document.getElementById('form');
const table = document.getElementById('books');

let myLibrary = [];

function Book(title, author, status) {
    this.title = title
    this.author = author
    this.status = status
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const title = form.elements.book.value;
    const author = form.elements.author.value;
    const status = form.elements.status.value;
    myLibrary.push(new Book(title, author, status));
    displayBooks(myLibrary);
});

function displayBooks(array) {
    for (let i = 0; i < array.length; i++) {
        let obj = array[i];

        // Check if the object is already displayed in the DOM
        if (obj.displayed) {
            continue;
        }

        let row = document.createElement("tr");

        for (let key in obj) {

            if (key == 'title' || key == 'author') {
                let col = document.createElement("td");
                col.innerHTML = obj[key];
                row.appendChild(col);
            
            } else {
                let col = document.createElement("td");
                let button = document.createElement("button");
                button.innerHTML = obj[key];
                col.appendChild(button);
                row.appendChild(col);
            }
        }

        let rmv = document.createElement("td");
        let rmvButton = document.createElement("button");
        rmvButton.innerHTML = "X"
        rmv.appendChild(rmvButton);
        row.appendChild(rmv);

        table.appendChild(row);

        obj.displayed = true;

    }
}