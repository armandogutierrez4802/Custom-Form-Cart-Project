import React from 'react';

// =========== CartItem Component ===========
const CartItem = ({
  title,
  price,
  selected,
  category,
  id,
  handleCartItemClick,
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
      <br />
    </>
  );
};

export default CartItem;
