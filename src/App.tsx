import getHex from './Tools/GetHex';
import shortid from 'shortid';
import { useState } from 'react';
import './Styles/App.css';

function App() {
  let [colors, setColors] = useState<string[]>([]);

  let hex = () => {
    let __FINDHEX__ = getHex();
    setColors (
      [
        ...colors,
        __FINDHEX__
      ]
    )
  }
  
  return (
    <div className="wrapper">
      <button className="generate-button" onClick = {hex}>Generate A New Color</button>
      {
        colors.map((item) => 
          <h3 className="color" style={{backgroundColor: `#${item}`}} key={shortid.generate()}>
          {item}
        </h3>)
      }
    </div>
  );
}

export default App;
