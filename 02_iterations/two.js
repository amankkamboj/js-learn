const codingLng = ['PHP', "Java","Cpp","Python","Swift"];

// const values = codingLng.forEach((item) => {
//     // console.log(item);
//     return item;
// })

// console.log(values);

const myNums =[1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num)=> num>5)

// console.log(newNums);

const myBooks=[{
    "name":"Book1",
    "edition":1989,
    "author":"Robin",
    "price":200,
    "gener": "history"
},
{
    "name":"Book2",
    "edition":2018,
    "author":"Arun",
    "price":300,
    "gener": "history"
},
{
    "name":"Book3",
    "edition":2022,
    "author":"Robin",
    "price":150,
    "gener": "Science"
},
{
    "name":"Book4",
    "edition":1999,
    "author":"Rahul",
    "price":1000,
    "gener": "history"
},
{
    "name":"Book5",
    "edition":2021,
    "author":"Tushar",
    "price":500,
    "gener": "history"
}
]

let book_500 = myBooks.filter( (book)=> book.price<500)
console.log(book_500);