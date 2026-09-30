const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID();   // ID that can increase automatically
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  return newBook; 
}

function displayLibrary() {
  const container = document.getElementById("library");
  container.innerHTML = ""; // clear previous content

  myLibrary.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.isRead ? "Read" : "Not read yet"}</p>
      <p><strong>ID:</strong> ${book.id}</p>
    `;

    container.appendChild(card);
  });
}

addBookToLibrary("The Hobbit", "Tolkien", 295, false);
addBookToLibrary("Clean Code", "Robert Martin", 464, true);

displayLibrary();

const dialog = document.getElementById("bookDialog");
const newBookBtn = document.getElementById("newBookBtn");
const bookForm = document.getElementById("bookForm");

newBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevvent the form from refreshing the page

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").checked;

  addBookToLibrary(title, author, pages, isRead);
  displayLibrary();
  dialog.close();
});

