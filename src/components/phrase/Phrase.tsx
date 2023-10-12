import React from 'react';

interface PhraseProps {
  id: number;
  text: string;
};

const Phrase: React.FC<PhraseProps> = ({ id, text }) => {
  const checkboxId = `phrase-checkbox-${id}`;

  return (
    <div className="card">
      <input id={checkboxId} type="checkbox" />
      <label htmlFor={checkboxId}>{text}</label>
    </div>
  );
};

export default Phrase;
