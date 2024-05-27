import React from 'react';

const PrevButton = ({ onClick, disabled }) => (
  <button onClick={onClick} disabled={disabled}>
    Previous
  </button>
);

export default PrevButton;
