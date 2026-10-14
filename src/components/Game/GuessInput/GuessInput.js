import React from 'react';

function GuessInput({ handleGuesses, disabled }) {

  const [guess, setGuess] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGuesses(guess);
    setGuess(''); 
  };

  return (
    <form 
      className="guess-input-wrapper" 
      onSubmit={(e) => {
        handleSubmit(e)
      }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        className="guess-input"
        id="guess-input"
        value={guess}
        onChange={(e) => setGuess(e.target.value.slice(0, 5).toUpperCase())}
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        disabled={disabled}
      />
</form>
  );
}

export default GuessInput;
