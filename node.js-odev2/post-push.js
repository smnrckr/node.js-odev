const books = [
    {bookName: 'Dune', author:'Frank Herbert'},
    {bookName: 'MistBorn', author:'Brandon Sanderson'},
    {bookName: 'The Kingkiller Chronicle', author:'Patrick Rothfuss'}
]

let bookList =()=>{
    books.map(post=>{
        console.log(post.bookName,post.author)
    });
}

let addBook=()=>{
    let promiseAdd = new Promise((resolve, reject) =>{
        books.push({bookName:'Lefthand of the Darkness', author:'Ursula K. Le Guin'})
        resolve("Kitap Eklendi")
    });
    return promiseAdd;
}

async function sortBookList(){
    try {
        let response = await addBook();
        console.log(response);
        bookList();
        
    } catch (error) {
        console.log(error);
        
    }
}
sortBookList();
