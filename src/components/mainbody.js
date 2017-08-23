import React, { Component } from 'react';
import Books from './books.js'
import Movies from './movies.js'

export default class Mainbody extends Component {
  render() {
    return (
      <section>
        <Books/>
        <Movies/>

      </section>
    );
  }
}
