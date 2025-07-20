class Book{
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static displayBooks() {
        const StoreBooks = [
            {title: 'Gastby Projects', author:"qwer", isbn:'4526'},
            {title: 'some random author', author:"abcd", isbn:'8855'}
        ]

        const books = StoreBooks;
        books.forEach(book => UI.addBookToList(book))
    }

    static addBookToList(book) {
        const list = document.querySelector("#book-list");
        const row = document.createElement("tr");
        row.innerHTML = `
           <td>${book.title}</td>
           <td>${book.author}</td>
           <td>${book.isbn}</td>
           <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }

    static clearFeilds() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    static deleteBook(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }
}

class Store {
    static getBook() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = []
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book) {
        const books = Store.getBook();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static deleteBook(isbn) {
        const books = Store.getBook();
        books = books.filter(book => book.isbn!=isbn);
        localStorage.setItem('books', JSON.stringify(books));
    }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks)

document.querySelector("#book-form").addEventListener("submit", e => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    if(title === "" || author === "" || isbn === "") {
        alert("please add all the details");
    } else {
        const book = new Book(title, author, isbn);
        UI.addBookToList(book);
        Store.addBook(book);
        UI.clearFeilds();
    }
})

document.querySelector('#book-list').addEventListener('click', e => {
    UI.deleteBook(e.target);
    Store.remove(e.target.parentElement.previousElementSibling.textContent);
})