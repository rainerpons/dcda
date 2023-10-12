import { useState } from 'react';
import './App.css';

const App = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheck = () => setChecked(checked => !checked);

  return (
    <>
      <h1>Don't Care + Didn't Ask</h1>
      <div className="card">
        <input id="checkbox" type="checkbox" onChange={handleCheck} />
        <label htmlFor="checkbox">{checked ? 'Is' : 'Isn\'t'} checked</label>
      </div>
      <p className="footnote">
        Meme app based around the <a href="https://www.reddit.com/r/copypasta/comments/qmxadi" target="_blank">"don't care didn't ask" copypasta</a>
      </p>
    </>
  );
};

export default App;
