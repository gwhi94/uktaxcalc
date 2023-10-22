import logo from './logo.svg';
import Navbar from './Navigation/Navbar'
import Form from './Form/Form'
import './App.css';
import "./index.css";
import Output from './Output/Output';
import CalculateOutput from './CalculateOutput/CalculateOutput';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.body.classList.add(
      'antialiased',
      'text-slate-500',
      'text-slate-400',
      'bg-white',
    );
  }, []);

  return (

    <div>
      <Navbar />

      <Output />

      <div className='grid grid-cols-2'>
        <Form />
        <CalculateOutput />
      </div>


    </div>



  );
}

export default App;


