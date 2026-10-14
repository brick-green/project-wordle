import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from './GuessInput/GuessInput';
import GuessList from './GuessList/GuessList';
import { checkGuess } from '../../game-helpers';
import StatusBanner from './StatusBanner/StatusBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('');
  const [disabled, setDisabled] = React.useState(false);

  function handleGuesses(guess) {
    setGuesses([...guesses, checkGuess(guess, answer)]);
    if (guess === answer) {
      setStatus('happy');
      setDisabled(true);
    }
    else if (guesses.length === 5) {
      setStatus('sad');
      setDisabled(true);
    }
  }
  
  return (
    <div>
      <GuessList guessList={guesses} />
      <StatusBanner status={status} guessCount={guesses.length} answer={answer} />
      <GuessInput handleGuesses={handleGuesses} disabled={disabled} />
    </div>
  );
}

export default Game;
