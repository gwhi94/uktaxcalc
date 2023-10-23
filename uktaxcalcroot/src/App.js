import logo from './logo.svg';
import Navbar from './Navigation/Navbar'
import Form from './Form/Form'
import './App.css';
import "./index.css";
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
      <div className="main-content-container ml-auto mr-auto shadow-md rounded">
        <div className='grid grid-cols-2'>
          <Form />
          <CalculateOutput />
        </div>
      </div>
    </div>
  );
}

export default App;


