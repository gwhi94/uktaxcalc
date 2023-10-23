import logo from './logo.svg';
import React, { useState } from 'react';
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

  const [data, setData] = useState('{}');

  return (

    <div>
      <Navbar />
      <div className="main-content-container ml-auto mr-auto shadow-md rounded">
        <div className='grid grid-cols-2'>
          <Form callback={setData}  />
          <CalculateOutput data={data}/>
        </div>
      </div>
    </div>
  );
}

export default App;


