import './App.css';
import freeCodeCampLogo from './img/FreeCodeCamp_logo.svg.png'
import Button from './component/button';
import Counter from './component/Counter';
import { useState } from 'react';

function App() {

  const [numClick, setNumClick] = useState(0);

  const handlerClick = () => {
    setNumClick(numClick + 1); 
  };

  const resetCounter = () => {
    setNumClick(0);
  };

  return (
    <div className="App">
      <div className='container-logo'>
        <img 
        className='logo'
        src={freeCodeCampLogo}
        alt='logo of FreeCodeCamp' />
      </div>
      <div className='main-container'>
        <Counter numClick={numClick} />
        <Button 
          text='Click'
          isButtonClick={true}
          handlerClick={handlerClick} /> 

        <Button 
          text='Reset'
          isButtonClick={false}
          handlerClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
