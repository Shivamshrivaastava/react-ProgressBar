 import React, { useState } from 'react';
import './style.css';
import progressbar from './progressbar';
export default function App() {
  const [val, setVal] = useState(10);
  const setValuer = (e) => setVal(Number(e.target));
  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        <progressbar width={val} />
        <form>
          <label htmlFor="">Input Percentage:</label>
          <input type="number" onChange={setValuer} />
        </form>
      </div>
    </>
  );
}
