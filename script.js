
function displayRoot() {
    let root = document.getElementById('root');
    root.setAttribute('style', 'display: block');
}

function displayBooks() {
  let books = document.getElementById("books");
  books.setAttribute("style", "display: block");
}

window.onload = function () {
    getBooks();
}
let data;
async function getBooks(value) {
    try {
      // make a request to the api
      let response = await fetch(`https://www.anapioficeandfire.com/api/books/${value}`);

      // get the response from the api
      data = await response.json();
      displayContent(data, value);
    } catch (error) {}
}

function displayContent(data, value) {
  let img = document.createElement("img");
  img.src = `./asset/${data.name}.jpg`;
  img.setAttribute("alt", `${data.name}`);
  img.setAttribute("class", "rounded float-start m-3");
  img.setAttribute("width", "200");
  img.setAttribute("height", "300");
  let para1 = document.createElement("p");
  para1.innerHTML = `Name: ${data.name}`;
  para1.setAttribute("class", "p-2");
  let para2 = document.createElement("p");
  para2.setAttribute("class", "p-2");
  para2.innerHTML = `Authors: ${data.authors}`;
  let para3 = document.createElement("p");
  para3.setAttribute("class", "p-2");
  para3.innerHTML = `Number Of Pages: ${data.numberOfPages}`;
  let para4 = document.createElement("p");
  para4.setAttribute("class", "p-2");
  para4.innerHTML = `Publisher: ${data.publisher}`;
  let para5 = document.createElement("p");
  para5.setAttribute("class", "p-2");
  para5.innerHTML = `Country: ${data.country}`;
  let para6 = document.createElement("p");
  para6.setAttribute("class", "p-2");
  para6.innerHTML = `Media Type: ${data.mediaType}`;
  //bookDetails.append(para1, para2, para3, para4, para5, para6);
  bookDetails.replaceChild(img, bookDetails.childNodes[0]);
  bookDetails.replaceChild(para1, bookDetails.childNodes[1]);
  bookDetails.replaceChild(para2, bookDetails.childNodes[2]);
  bookDetails.replaceChild(para3, bookDetails.childNodes[3]);
  bookDetails.replaceChild(para4, bookDetails.childNodes[4]);
  bookDetails.replaceChild(para5, bookDetails.childNodes[5]);
  bookDetails.replaceChild(para6, bookDetails.childNodes[5]);
}