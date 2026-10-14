import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../../constants';

function GuessList({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess, index) => (
        <Guess guess={guess} key={index} />
      ))}
      {
        range(guessList.length, NUM_OF_GUESSES_ALLOWED).map((index) => (
          <Guess guess={[]} key={index} />
        ))}
    </div>
  );
}

export default GuessList;
