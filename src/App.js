import React from 'react';
import './App.css';
import Header from './components/header'
import Tabs from './components/tabs'
import New from './components/new'
import Genres from './components/genres'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Tabs />
      <New />
      <Genres />
      <Footer />
    </div>
  );
}

export default App;
