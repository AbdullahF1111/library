---
# 📚 Library App
A simple JavaScript application for managing a personal library.  
Users can add books, delete books, and toggle their read status.  
Built using **HTML**, **CSS**, and **Vanilla JavaScript**.

---

## 🚀 Features
- Add new books through a dialog form  
- Display books as cards with unique IDs  
- Delete books from the library  
- Toggle read status for each book  
- Dynamic background colors for book cards  
- Floating “New Book” button for quick access  

---

## 🧠 How It Works
Books are stored inside an array called `myLibrary`.  
Each book is created using a constructor:

```js
function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}
```

Books are added using `addBookToLibrary()` and displayed using `displayLibrary()`.  
Each card includes buttons for deleting the book and toggling its read status.

---

## 📂 Project Structure
```
index.html
style.css
basic.js
README.md
```

---
## 🌐 Live Demo (GitHub Pages)
The project is hosted on GitHub Pages:

🔗 https://abdullahf1111.github.io/library/


---

## 🛠 Technologies Used
- HTML  
- CSS  
- JavaScript  
- `<dialog>` API  
- `crypto.randomUUID()`  

---

## 📄 License
This project is open-source and free to use.

---
