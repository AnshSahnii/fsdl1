const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public')); // frontend link

let books = [
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "Clean Code", author: "Robert C. Martin" }
];

// GET all books
app.get('/books', (req, res) => {
    res.json(books);
});

// POST add book
app.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook);
    res.json(newBook);
});

// PUT update book
app.put('/books/:id', (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (!book) return res.send("Not found");

    book.title = req.body.title;
    book.author = req.body.author;
    res.json(book);
});

// DELETE book
app.delete('/books/:id', (req, res) => {
    books = books.filter(b => b.id != req.params.id);
    res.send("Deleted");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});