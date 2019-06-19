import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Game from './components/Game'


class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Game />
        <Footer />
      </div>
    )
  }
}

export default App;
