const bookPath = "https://anapioficeandfire.com/api/books"

function getResponse(response) {
  return response.json()
}

function processJSON(json) {
  for(let i = 0; i < json.length; i ++) {
    console.log(json[i])
  }
}

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch(bookPath)
    .then((resp) => resp.json())
    .then((books) => renderBooks(books))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
} 

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
