import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBinds from './components/EventBinds';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent/>
      {/* <EventBinds/> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* {<Counter/>} */}
      {/* {<Message ><button>Subscribe</button></Message>} */}
      {/* <Greet name="Aditya" heroName="Naruto"><p>Ini Paragraf</p></Greet> */}
      {/* <Greet name="Augusta" heroName="Sasuke"><button>Click, me!</button></Greet> */}
      {/* <Greet name="Firmansyah" heroName="Kabuto"/> */}
      {/* <Welcome name="Aditya" heroName="Naruto"><p>Ini Paragraf</p></Welcome> */}
      {/* <Welcome name="Augusta" heroName="Sasuke"><button>Click, me!</button></Welcome> */}
      {/* <Welcome name="Firmansyah" heroName="Kabuto"/> */}
      {/* <Hello/> */}
    </div>
  )
}

export default App;
