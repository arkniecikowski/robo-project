import React, {useState} from 'react';
import './App.css'

import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import FotterButton from './components/FooterComponent/FooterButton/FotterButtton';
import MainComponent from './components/MainComponent/MainComponent';


function App() {
  const [nick, setNick] = useState("");

  const handleClick = (e) => {
    setNick(e.nick)
  }

  return ( 
    <div className="App">
      <header>
        <HeaderComponent handleNick={nick}/>
      </header>
      <main>
        <MainComponent/>
      </main>
      <footer>
        <FotterButton  handleClick={handleClick} />
        <h3>footer</h3>
      </footer>
    </div>
  );
}

export default App;
