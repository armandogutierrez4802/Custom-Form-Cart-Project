import React from 'react';
// import { options } from './Constants.js';


/*
TASKS: 
- SAVE SELECT STATE OF OPTIONS IN CART ITEMS (JUST LIKE QTY)
- UPDATING QTY WILL UPDATE HOW MANY OPTIONS LISTS WILL RENDER
- SELECTING SPECIFIC OPTION (LIKE CAKE SIZE, WILL CHANGE CARTITEM PRICE)
*/

// =========== CartItem Component ===========
const CartItem = ({
  title,
  price,
  selected,
  category,
  qty,
  id,
  options,
  handleCartItemClick,
  updateQty,
  total,
  updateTotal,
}) => {
  const SelectedItem = () => {
    // const itemOptions = options.filter(
    //   (option) => option.category === category
    // );
    // console.log(itemOptions);
    return (
      <>
        <button type="button" onClick={() => updateQty('-', id)}>
          -
        </button>
        <span>{qty}</span>
        <button type="button" onClick={() => updateQty('+', id)}>
          +
        </button>
        {/* {itemOptions.length? <br /> : ''}
        {itemOptions.map((option) => (
          <>
            <input type="checkbox" value={option.value} />
            <label>{option.title}</label>
            <br />
          </>
        ))} */}
        {options && options.length ? <br /> : ''}
        {/* {options &&
          options.map((option) => (
            <>
              <input type="checkbox" value={option.value} />
              <label>{option.title}</label>
              <br />
            </>
          ))} */}
        {options &&
          options.map((option) => (
            <>
              <div>Please select your {option.name}</div>

              {option.options.map((opt) => (
                <>
                  {/*NAME CAN BE OPT.NAME OR OPTION.NAME*/}
                  <input type="radio" name={option.name + id} value={opt.value} />
                  <label>{opt.title}</label>
                  <br />
                  {console.log(option.name + id)}
                </>
              ))}

              {/* <br /> */}
            </>
          ))}
      </>
    );
  };

  const handleOnChange = () => {
    handleCartItemClick(id);
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
      <br />
    </>
  );
};

export default CartItem;
