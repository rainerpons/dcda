import './App.css';
import { LIST_OF_PHRASES } from './assets/list';
import Phrase from './components/phrase/Phrase';

const App = () => {
  return (
    <>
      <h1>Don't Care + Didn't Ask</h1>
      {LIST_OF_PHRASES.map(({ id, text }) => (
        <Phrase id={id} text={text} key={`phrase-${id}`} />
      ))}
      <p className="footnote">
        Meme app based around the <a href="https://www.reddit.com/r/copypasta/comments/qmxadi" target="_blank">"don't care didn't ask" copypasta</a>
      </p>
    </>
  );
};

export default App;
