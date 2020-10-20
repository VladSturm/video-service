import React from 'react';
import './App.css';
import Header from './components/header'
import Tabs from './components/tabs'
import New from './components/new'
import Genres from './components/genres'
import Footer from './components/footer'

import {Wrap} from './style'

function App() {
  return (
    <div className="App">
      <Wrap>
        <Header />
        <Tabs />
        <New />
        <Genres />
      </Wrap>
      <Footer />
      
    </div>
  );
}

export default App;
