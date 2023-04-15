import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Question from './Question';
import data from './data';



function App() {
  const [infos, setInfos] = useState(data)

  return (
    <div className='container mt-5 '>
      <h3>Question and answers about login</h3>
      <section className='info'>
        {infos.map(info => (
          <Question key={info.id} {...info} />
        ))}
      </section>
    </div>
  );
}


export default App;
