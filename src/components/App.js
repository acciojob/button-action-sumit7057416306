import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [showParagraph,setShowParagraph]=useState(false);
  let handleClick=()=>{
    setShowParagraph(true)
  }
  return (
    <div className="App" id="main">
      <p id='para'  className={showParagraph?'show':'hide'}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id='click' onClick={handleClick}>Click me!</button>className={showParagraph?'show':'hide'}
    </div>
  );
}

export default App
