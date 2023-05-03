import React from 'react';

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

  return (
    <>
      <input
        type="checkbox"
        id={id}
        checked={selected}
        onChange={() => handleOnChange()}
      />
      <label htmlFor={id}>{title} ... </label>
      <span>${price}</span>
      <button type="button" onClick={() => updateQty('-', id)}>-</button>
      <span>{qty}</span>
      <button type="button" onClick={() => updateQty('+', id)}>+</button>
      <br />
    </>
  );
};

export default CartItem;
