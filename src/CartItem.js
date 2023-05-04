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

  const QtyButtons = () => {
    return (
       <>
        <button type="button" onClick={() => updateQty('-', id)}>-</button>
        <span>{qty}</span>
        <button type="button" onClick={() => updateQty('+', id)}>+</button>
      </>);
  }

  const OptionsList = () => {
    //return out a dropdown menu with options based on the items category
    // Ex fillings for all the cake options
  }

  return (
    <>
      <input
        type="checkbox"
        id={id}
        checked={selected || qty}
        onChange={() => handleOnChange()}
      />
      <label htmlFor={id}>{title} ... </label>
      <span>${price}</span>
      {/* {(qty && (<>
           <button type="button" onClick={() => updateQty('-', id)}>-</button>
           <span>{qty}</span>
           <button type="button" onClick={() => updateQty('+', id)}>+</button>
           </>
      ))} */}
      {/* {<QtyButtonComponent/> && qty} */}
      {(qty)? <QtyButtons/> : ''}
      {/* <button type="button" onClick={() => updateQty('-', id)}>-</button>
        <span>{qty}</span>
        <button type="button" onClick={() => updateQty('+', id)}>+</button> */}
      <br />
    </>
  );
};

export default CartItem;
