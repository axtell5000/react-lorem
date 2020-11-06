import React, { useState } from 'react';
import data from './data';

function App() {
  
  // setting state
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello world');
  }

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count} 
          onChange={(e) => setCount(e.target.value)}         
        />
        <button className='btn' title="Generate">generate</button>
      </form>
      <article className='lorem-text'>
        <p>Test Data</p>
      </article>
    </section>
  )
}

export default App;
