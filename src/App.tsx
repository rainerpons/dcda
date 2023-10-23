import { cloneDeep } from 'lodash';
import { useMemo, useState } from 'react';

import './App.css';
import { LIST_OF_PHRASES } from './assets/list';

const App = () => {
  const [isInputChecked, setIsInputChecked] = useState<boolean[]>(new Array(LIST_OF_PHRASES.length).fill(false));

  const handleChange = (index: number) => {
    const clonedIsInputChecked = cloneDeep(isInputChecked);
    clonedIsInputChecked[index] = !clonedIsInputChecked[index];
    setIsInputChecked(clonedIsInputChecked);
  };

  const joinedPhrases = useMemo(() => {
    return LIST_OF_PHRASES
      .filter((_, phraseIndex) => isInputChecked[phraseIndex])
      .map(phrase => phrase.text)
      .join(' + ');
  }, [isInputChecked]);

  return (
    <>
      {/* Header */}
      <h1>Don't Care + Didn't Ask</h1>
      {/* Phrases */}
      {LIST_OF_PHRASES.map(({ id, text }, textIndex) => (
        <>
          <input
            id={`${id}`}
            type="checkbox"
            checked={isInputChecked[textIndex]}
            onChange={() => handleChange(textIndex)}
          />
          <label htmlFor={`${id}`}>{text}</label>
          <br />
        </>
      ))}
      {/* Parsed text */}
      <>
        <br />
        <label>Result: </label>
        <span>{joinedPhrases}</span>
      </>
      {/* Description */}
      <p className="footnote">
        (Meme app based around the <a href="https://www.reddit.com/r/copypasta/comments/qmxadi" target="_blank">"don't care didn't ask"</a> copypasta.)
      </p>
    </>
  );
};

export default App;
