
import { useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <CounterBox></CounterBox>
    </div>
  );
}

function CounterBox() {

  const [counter, setCounter] = useState(0); // Esto se crea con un array, no con un objeto.
  const [color, setColor] = useState('black');

  /*function changeCounter(value) {
    console.log("Cambiamos el contador: ", value);
    setCounter(counter + + value);

    let prevText = counter + + value;
    
    // Actualizamos la variable de color.
    if (prevText < 0) {
      setColor('red')
    } else if (prevText >= 1) {
      setColor('green')
    } else {
      setColor('black')
    }
    
  }*/

  function changeCounter(value) {
    setCounter(() => {      
      let newColor = "";
      let newCounter = (counter + + value)      

      if ( newCounter == 0) {        
        newColor = 'black'
      } else {
        newColor = newCounter > 0 ? 'green' : 'red';
        setColor(newColor);
      }
      return newCounter;
    })
  }

  return (
    <div className='CounterBox'>
      <h1>Contador</h1>

      <div className='CounterValue'>
        <span style={{ 'color': color }}>{counter}</span>
      </div>

      <div className="BtnContainer">
        <Button updateValue={changeCounter} text="Lower Count" value="-1"></Button>
        <Button updateValue={changeCounter} text="Add Count" value="1"></Button>
      </div>
    </div>
  )
}

function Button(props) {

  // Hay que crear una funcion para gestrionar la llamada al padre.
  // Sirve para identificar el valor y/o el btn pulsado, permite utilizar funciones
  // y vincularlas a eventos.
  function handleClick() {
    props.updateValue(props.value);
  }

  // Dibujamos el boton.
  return (
    <button
      onClick={handleClick}
      value={props.value}
      className='Btn'>{props.text}</button>
  )

}
export default App;
