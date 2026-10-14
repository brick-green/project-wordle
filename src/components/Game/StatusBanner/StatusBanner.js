import React from 'react';

function StatusBanner({status, guessCount, answer}) {
  return (
    <div className={`${status} banner`}>
      {status === 'happy' && (
      <p>
        <strong>Congratulations!</strong> Got it in 
        <strong> {guessCount} guesses</strong>.
      </p>
      )}
      {status === 'sad' && (
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      )}
    </div>
  );
}

export default StatusBanner;
