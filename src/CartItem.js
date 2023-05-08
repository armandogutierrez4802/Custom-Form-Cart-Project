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

  const SelectedItem = () => {
    const itemOptions = options.filter(
      (option) => option.category === category
    );
    console.log(itemOptions);
    return (
      <>
        <button type="button" onClick={() => updateQty('-', id)}>
          -
        </button>
        <span>{qty}</span>
        <button type="button" onClick={() => updateQty('+', id)}>
          +
        </button>
        <br />
        {itemOptions.map((option) => (
          <>
            <input type="checkbox" value={option.value} />
            <label>{option.title}</label>
            <br />
          </>
        ))}
      </>
    );
  };

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
      {qty ? <SelectedItem /> : ''}
      {/* {qty ? qtyButtons : '' */}
      <br />
      {/* {qty ? optionsList : ''} */}
    </>
  );
};

export default CartItem;
