import React, { Component } from 'react';

let movies = [
  {
    id: 1,
    title : 'Harry Potter',
    producer: 'Steve Spielberg'
  },
  {
    id: 2,
    title: 'Oceans Eleven',
    producer: 'Brad Pitt',
  },
  {
    id: 3,
    title: 'Matilda',
    producer: 'Steve Spielberg'
  }
]


export default class Movies extends Component {
  render() {
    let myMovies = movies.map((movie) => {
      return(
        <ul key={movie.id}>
          <li>`{movie.title + ", by " + movie.producer}`</li>
        </ul>
      )
    })

    return (
      <section>
        <h1>Movies</h1>
        {myMovies}
      </section>
    );
  }
}
