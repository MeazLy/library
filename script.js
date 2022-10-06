let myLibrary = [];
let newBook = "";
let addBookButton = document.querySelector(".addBookButton")
let container = document.querySelector(".container")
let j = 0 
let body = document.querySelector("body")
// addBookButton.addEventListener("click", () => {
//   newBook = new book (prompt("What book would you like to add?"))

// })
addBookButton.addEventListener("click", () => {
  

  let form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "");
  form.setAttribute("id", "form");
  form.setAttribute("onsubmit", "return false");
  let bookTitle = document.createElement("input");
  bookTitle.setAttribute("type", "text");
  bookTitle.setAttribute("name", "title");
  bookTitle.setAttribute("placeholder", "Title?");
  let author = document.createElement("input");
  author.setAttribute("type", "text");
  author.setAttribute("name", "author");
  author.setAttribute("placeholder", "Author?");
  let pageNumber = document.createElement("input");
  pageNumber.setAttribute("type", "text");
  pageNumber.setAttribute("name", "pageNumber");
  pageNumber.setAttribute("placeholder", "Pages?");

  let readStatus = document.createElement("input");
  readStatus.setAttribute("type", "text");
  readStatus.setAttribute("name", "readStatus");
  readStatus.setAttribute("placeholder", "Read?");


  let submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "submit");


  form.appendChild(bookTitle);
  form.appendChild(author);
  form.appendChild(pageNumber);
  form.appendChild(readStatus);
  form.appendChild(submitButton);
  body.appendChild(form)



  submitButton.addEventListener("click", () => {
    newBook = new book(bookTitle.value, author.value, pageNumber.value, readStatus.value)
  });
});




function book(book, author, pages, readStatus){
  this.book = book;
  this.author = author;
  this.pages = pages;
  this.read = readStatus


  addBookToLibrary(this.book, this.author, this.pages, this.read);
};

function addBookToLibrary(book, author, pages, readStatus){
 
  
  
  

  if(myLibrary.includes(book)){
    alert("Book already listed!")
  }else{
  


  for(let i = j; i <= myLibrary.length; i++){
    let readButton = document.createElement("button");
    let newBook = document.createElement("div");
    let authorName = document.createElement("div");
    let bookPages = document.createElement("div");
    let read = document.createElement("div");
    let removeButton = document.createElement("button");
    

    readButton.innerHTML = readStatus   
    newBook.classList.add("bookContainer");
    removeButton.innerHTML = "Remove"
    if(myLibrary.length == 0){
      myLibrary.push(book)
      newBook.innerHTML = myLibrary[i];
      authorName.innerHTML = author;
      bookPages.innerHTML = pages;
      read.innerHTML = readStatus

      container.appendChild(newBook)
      newBook.appendChild(authorName);
      newBook.appendChild(bookPages);
      newBook.appendChild(read);
   
      newBook.appendChild(readButton);
      newBook.appendChild(removeButton)
    
      j++
    }
    else if(myLibrary.includes(book)){
      break;
    }else{
  
    myLibrary.push(book)
    newBook.innerHTML = myLibrary[i];
    authorName.innerHTML = author;
      bookPages.innerHTML = pages;
      read.innerHTML = readStatus

      container.appendChild(newBook)
      newBook.appendChild(authorName);
      newBook.appendChild(bookPages);
      newBook.appendChild(read);
      newBook.appendChild(readButton);
      newBook.appendChild(removeButton)
      j++;


   
  }
  readButton.addEventListener("click", e => {
    if(e.target.innerHTML == "Read"){
      e.target.innerHTML = "Not read"
      read.innerHTML = "Not read"
    }else{
      e.target.innerHTML = "Read"
      read.innerHTML = "Read"
    }
  });


  removeButton.addEventListener("click", () => {
    newBook.remove();
  });
  };
  };
    
  

};


