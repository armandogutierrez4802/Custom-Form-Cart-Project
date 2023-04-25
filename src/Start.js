import React from 'react';

// =========== Start Component ===========
const Start = ({ updatePage }) => {
  return (
    <>
      <button type="button" onClick={() => updatePage('cart')}>
        Start My Order
      </button>
    </>
  );
};

export default Start;
