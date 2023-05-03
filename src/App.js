import React, { useState } from 'react';
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

  return (
    <>
      <Feature
        initialCartItems={initialCartItems}
        categories={categories}
        pickupTimes={pickupTimes}
        paymentMethods={paymentMethods}
      />
    </>
  );
}
