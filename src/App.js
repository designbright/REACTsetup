import React, { Component } from 'react';
import Footer from './components/footer.js';
import Mainbody from './components/mainbody.js';
import Header from './components/header.js';


class App extends Component {
  render() {
    return (
      <section>
        <Header/>
        <Footer/>
        <Mainbody/>
      </section>
    );
  }
}

export default App;
