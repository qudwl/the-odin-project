let myLibrary = []

function Book(title, author, year, pages, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
}

const addBook = () => {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let year = parseInt(document.getElementById("year").value);
    let pages = parseInt(document.getElementById("pages").value);
    let read = document.getElementById("read").checked;

    if (title.length == 0 || author.length == 0 || isNaN(pages) || isNaN(year)) {
        alert("Add all values!");
        return;
    }

    myLibrary.push(new Book(title, author, year, pages, read));
    refreshShelf();
}

const refreshShelf = () => {

    while (document.getElementById("shelf").childElementCount != 0) {
        document.getElementById("shelf").removeChild(document.getElementById("shelf").firstChild);
    }

    for (book of myLibrary) {
        // Creating the HTML Elements.
        let div = document.createElement('div');
        let title = document.createElement('h2');
        let author = document.createElement('h4');
        let year = document.createElement('p');
        let pages = document.createElement('p');
        let read = document.createElement('button');
        let delBook = document.createElement('button');

        // Setting the values.
        title.innerText = book.title;
        author.innerText = book.author;
        year.innerText = book.year;
        pages.innerText = book.pages + " pages";
        read.textContent = book.read ? "Read" : "Not Read";
        delBook.textContent = "Delete";

        // Set read button to change read status.
        read.addEventListener("click", () => {
            book.read = !book.read;
            read.textContent = book.read ? "Read" : "Not Read";
        })

        // Allows deletion of book.
        delBook.addEventListener("click", () => {
            let index = myLibrary.indexOf(book);
            if (index != -1) {
                myLibrary.splice(index, 1);
                refreshShelf();
            }
        });

        // Append all elements.
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(year);
        div.appendChild(pages);
        div.appendChild(read);
        div.appendChild(delBook);

        // Add to document.
        document.getElementById("shelf").appendChild(div);
        document.getElementById("addBook").style.display = '';
    }
}

window.onload = () => {
    document.getElementById("add").addEventListener("click", () => {
        addBook();
    })
    document.getElementsByTagName("footer")[0].addEventListener("click", () => {
        document.getElementById("addBook").style.display === '' ?
            document.getElementById("addBook").style.display = 'flex' :
            document.getElementById("addBook").style.display = '';
    })
};