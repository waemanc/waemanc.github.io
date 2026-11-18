
/* Page 1: Want to Read */
const books = [];

function addBook()
{
    const titleInput = document.getElementById("book-title");
    const authorInput = document.getElementById("book-author");

    let title = titleInput.value;
    let author = authorInput.value;

    if(title == "" || author == "")
    {
        alert("Please enter a book title and author!");
        return;
    }

    let book = title + " by " + author;

    books.push(book);

    updateBooks();

    titleInput.value = "";
    authorInput.value = "";
}

function updateBooks()
{
    const bookList = document.getElementById("book-list");

    bookList.innerHTML = "";

    for(let i = 0; i < books.length; i++)
    {
        let currentBook = books[i];

        let htmlToInject = "<p>" + currentBook + "</p>";

        bookList.innerHTML += htmlToInject;
    }
}
