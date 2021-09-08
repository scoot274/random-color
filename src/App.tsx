import getHex from './Tools/GetHex';
import shortid from 'shortid';
import { useEffect, useState } from 'react';
import './Styles/App.css';

function App() {
  let [colors, setColors] = useState<string[]>([]);
  let LOCAL_STORE = 'randoColors.cachedColors';

  let hex = () => {
    setColors (
      [
        ...colors,
        getHex()
      ]
    )
  }
  useEffect(() => {
    const colors__CACHE = JSON.parse(localStorage.getItem(LOCAL_STORE) || '{}');
    if(colors__CACHE) setColors(colors__CACHE)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORE, JSON.stringify(colors))
  }, [colors])
  /*
  Local Storage caching basically stolen from WDS, 
  thanks Kyle
  */
  return (
    <div className="wrapper">
      <button className="generate-button" onClick = {hex}>Generate A New Color</button>
      <button className="remove-button" onClick = {
        () => setColors([])
      }>Remove Colors</button>
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
