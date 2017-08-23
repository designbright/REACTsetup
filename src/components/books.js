import React, { Component } from 'react';

let books = [
  {
    id: 1,
    title : 'Harry Potter',
    author: 'JK Rowling'
  },
  {
    id: 2,
    title: 'Station Eleven',
    author: 'Emily St John Mandel',
  },
  {
    id: 3,
    title: 'Matilda',
    author: 'Roald Dahl'
  }
]

export default class Books extends Component {
  render() {
    let myBooks = books.map((book) => {
      return(
        <ul key={book.id}>
          <li>`{book.title + ", by " + book.author}`</li>
        </ul>
      )
    })

    return (
      <section>
        <h1 className="content">Books</h1>
        {myBooks}
      </section>
    );
  }
}
