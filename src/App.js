/* global localStorage */
import React, {useCallback, useEffect, useState} from 'react';
import './app.css';
import Input from './components/Input';
import Output from './components/Output';
import Copyright from './components/Copyright';

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    const text = localStorage.getItem('text');

    if (text) {
      setText(text);
    }
  }, [])

  const handleChange = useCallback(text => {
    setText(text);
    localStorage.setItem('text', text);
  })

  const handleClickClear = useCallback(() => setText(''))

  return (
    <div className="app">
      <Input
        text={text}
        onChange={handleChange}
      />

      <Output text={text}/>

      <button
        type="button"
        title="Clear"
        onClick={handleClickClear}
      >
        ×
      </button>

      <Copyright
        author="Vladimir Rodkin"
        repo="text-lines"
        username="vovanr"
      />
    </div>
  );
}

export default App;
