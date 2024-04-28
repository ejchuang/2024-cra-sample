import { useEffect, useState } from 'react';
//外部套件
import axios from 'axios';
import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import'./assets/all.scss'
function App() {
  const [text,setText] = useState('');
  const onChangeHandler = (e) =>{
    setText(e.target.value)
  }

  useEffect (()=>{
    (async()=>{
      console.log(process.env.REACT_APP_PATH);
      const path = process.env.REACT_APP_PATH;
      const result = await axios.get(path);
      console.log(result);
    })();
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" className="btn btn-primary">Primary</button>
        {text}
        <Input id="sampleText" text="這是一個input" value={text} 
        onChangeHandler={onChangeHandler}/>
      </header>
    </div>
  );
}

export default App;
