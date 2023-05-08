import React from 'react';
import { options } from './Constants.js';

// =========== CartItem Component ===========
const CartItem = ({
  title,
  price,
  selected,
  category,
  qty,
  id,
  handleCartItemClick,
  updateQty,
  total,
  updateTotal,
}) => {
  const handleOnChange = () => {
    handleCartItemClick(id);
  };

  const qtyButtons = (
    <>
      <button type="button" onClick={() => updateQty('-', id)}>
        -
      </button>
      <span>{qty}</span>
      <button type="button" onClick={() => updateQty('+', id)}>
        +
      </button>
    </>
  );

  const optionsList = (
    //return out a dropdown menu with options based on the items category
    // Ex fillings for all the cake options
    const itemOptions = 

    <>
    {/* <div>Please select a {option.name} for your {title}</div> */}
      {options.map((option) => (
        <>
          <input type="checkbox" value={option.value} />
          <label>{option.title}</label>
          <br />
        </>
      ))}
      <br />
    </>
  );

  return (
    <>
      <input
        // style={{ display: 'none' }}
        type="checkbox"
        id={id}
        checked={selected || qty}
        onChange={() => handleOnChange()}
      />
      <label htmlFor={id}>{title} ... </label>
      <span>${price}</span>
      {qty ? qtyButtons : ''}
      <br />
      {qty ? optionsList : ''}
    </>
  );
};

export default CartItem;
