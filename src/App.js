import React, { Component } from 'react'
import Header from './user/ui/header/Header'
import Footer from './user/ui/footer/Footer'
// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  render() {


    return (
      <div className="App">
      <Header />
        {this.props.children}
      <Footer />
      </div>
    );
  }
}

export default App
