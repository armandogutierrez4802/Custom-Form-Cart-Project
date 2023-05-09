import React, { useState, useEffect} from 'react';
import Feature from './Feature';
import {
  initialCartItems,
  categories,
  pickupTimes,
  paymentMethods,
} from './Constants.js';
import './style.css';

// ================ App Component ================

export default function App() {
  // const fillingOptions = [];
  // const options = []; // Like adding nuts, fruit, etc.... maybe put fillings here too?

  const [count, setCount] = useState(localStorage.getItem('count'));

  useEffect(() => {
    localStorage.setItem('count', count+1);
  }, [count])

  const handleClick = () => {
    // setCount(count+1);
  }

  return (
    <>
    <h1>{count}</h1>
    <button type="button" onClick={handleClick}>+</button>
      <Feature
        initialCartItems={initialCartItems}
        categories={categories}
        pickupTimes={pickupTimes}
        paymentMethods={paymentMethods}
      />
    </>
  );
}
