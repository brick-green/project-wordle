import React from 'react';
import { range } from '../../../utils';

function Guess({guess}) {
  return (
    <p className="guess">
      {guess.map((element, index, array) => (
        console.log(element),
        <span key={index} className={`cell ${element.status}`}>{element.letter}</span>
      ))}
      {
        range(guess.length, 5).map((index) => (
          <span key={index} className="cell"></span>
        ))}
    </p>
  );
}

export default Guess;
