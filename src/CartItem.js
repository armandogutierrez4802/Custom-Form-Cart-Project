import React from 'react';

/*
TASKS: 
- SAVE SELECT STATE OF OPTIONS IN CART ITEMS (JUST LIKE QTY)
- SELECTING SPECIFIC OPTION (LIKE CAKE SIZE, WILL CHANGE CARTITEM PRICE)

- UPDATING QTY WILL UPDATE HOW MANY OPTIONS LISTS WILL RENDER
*/

// =========== CartItem Component ===========
const CartItem = ({
  title,
  price,
  selected,
  // category,
  qty,
  id,
  options,
  handleCartItemClick,
  handleOptionClick,
  updateQty,
  // total,
  // updateTotal,
}) => {
  const SelectedItem = () => {


    return (
      <>
        <button type="button" onClick={() => updateQty('-', id)}>
          -
        </button>
        <span>{qty}</span>
        <button type="button" onClick={() => updateQty('+', id)}>
          +
        </button>

        {options && options.length ? <br /> : ''}

        {options &&
          options.map((option) => (
            <>
              <div>Please select your {option.name}</div>

              {option.options.map((opt) => (
                <>
                  <input
                    type="radio"
                    id={opt.title + id}
                    name={option.name}
                    value={opt.value}
                    checked={selected}
                    onChange={() => handleOptionClick(id, opt.value)}
                  />
                  <label htmlFor={opt.title + id}>{opt.title}</label>
                  <br />
                  {/* {console.log(option.name + id)} */}
                </>
              ))}
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
