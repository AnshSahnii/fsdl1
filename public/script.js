const API = "/books";

async function loadBooks() {
    const res = await fetch(API);
    const data = await res.json();

    const container = document.getElementById("books");
    container.innerHTML = "";

    data.forEach(b => {
        container.innerHTML += `
            <div class="book">
                <h4>${b.title}</h4>
                <p>${b.author}</p>
                <p>ID: ${b.id}</p>
            </div>
        `;
    });
}

async function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author })
    });

    loadBooks();
}

async function updateBook() {
    const id = document.getElementById("uid").value;
    const title = document.getElementById("utitle").value;
    const author = document.getElementById("uauthor").value;

    await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author })
    });

    loadBooks();
}

async function deleteBook() {
    const id = document.getElementById("did").value;

    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    loadBooks();
}

loadBooks();