import React from 'react';
import { cakeFillings } from './Constants.js';

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
    <>
      <div>Please select a filling for each cake</div>
      <select name="options" id="options">
        {cakeFillings.map((option) => (
          <option value={option.value}>{option.title}</option>
        ))}
      </select>
      <br />

      {cakeFillings.map((option) => (
        <>
          <input type="checkbox" value={option.value} />
          <label>{option.title}</label>
        </>
      ))}
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
      {qty > 0 && category === 'cake' ? optionsList : ''}
    </>
  );
};

export default CartItem;
