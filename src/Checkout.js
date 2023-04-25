import React from 'react';

// =========== Checkout Component ===========
const Checkout = ({ updatePage, pickupTimes, paymentMethods }) => {
  return (
    <>
      <h2>Checkout</h2>
      <button
        type="button"
        onClick={() => {
          updatePage('cart');
        }}
      >
        Back
      </button>{' '}
      <br />
      <input type="text" name="first" placeholder="First Name" /> <br />
      <input type="text" name="last" placeholder="Last Name" /> <br />
      <input type="text" name="email" placeholder="Email" /> <br />
      <input type="text" name="phone" placeholder="Phone #" /> <br />
      <label>When would you pick up the order?</label> <br />
      <input type="text" placeholder="Ex. Saturday April 15" /> <br />
      <label>What time would you like to pick it up?</label> <br />
      <select name="time" id="time">
        {pickupTimes.map((option) => (
          <option value={option.value}>{option.time}</option>
        ))}
      </select>
      <br />
      <label>What is your prefered method of payment?</label> <br />
      <select name="payment" id="payment">
        {paymentMethods.map((option) => (
          <option value={option.value}>{option.method}</option>
        ))}
      </select>
      <br />
      <input type="checkbox" />
      <label> I have read the Terms & Conditions on the home page</label>
      <br />
      <input type="checkbox" />
      <label>
        I understand that all orders are subject to Product availability and the
        availability of Personnel to perform the Services
      </label>
      <br />
      <button type="submit">Submit Order Request</button>
    </>
  );
};

export default Checkout;
