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
    const status = form.elements.status.value === 'true';
    myLibrary.push(new Book(title, author, status));
    displayBooks(myLibrary);
});

function displayBooks(array) {
    
    //Clear table for each iteration
    table.innerHTML = "";
    
    for (let i = 0; i < array.length; i++) {
        let obj = array[i];
        let row = document.createElement("tr");

        for (let key in obj) {

            if (key == 'title' || key == 'author') {
                let col = document.createElement("td");
                col.innerHTML = obj[key];
                row.appendChild(col);
            
            } else {
                let col = document.createElement("td");
                let button = document.createElement("button");
                if (obj[key]) {
                    button.classList.add('read');
                    button.innerHTML = 'Read';
                } else {
                    button.innerHTML = 'Not Read';
                }
                button.id = i;
                button.addEventListener('click', changeStatus, false);
                col.appendChild(button);
                row.appendChild(col);
            }
        }

        let rmv = document.createElement("td");
        let rmvButton = document.createElement("button");

        rmvButton.innerHTML = "X";
        rmvButton.className = i;
        rmvButton.addEventListener('click', removeBook, false);
        rmv.appendChild(rmvButton);
        row.appendChild(rmv);

        table.appendChild(row);
    }
}

function removeBook(event) {
    let index = Number(event.target.className);
    myLibrary.splice(index, 1);
    displayBooks(myLibrary);
}

function changeStatus(event) {
    let index = Number(event.target.id);
    myLibrary[index].status = !myLibrary[index].status;
    displayBooks(myLibrary);
}