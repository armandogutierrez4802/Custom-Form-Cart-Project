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
  optionGroups,
  handleCartItemClick,
  handleOptionClick,
  updateQty,
  // total,
  // updateTotal,
}) => {
  const SelectedItem = () => {
    const handleOnChange = () => {};

    return (
      <>
        <button type="button" onClick={() => updateQty('-', id)}>
          -
        </button>
        <span>{qty}</span>
        <button type="button" onClick={() => updateQty('+', id)}>
          +
        </button>

        {optionGroups && optionGroups.length ? <br /> : ''}
        {/* {console.log(optionGroups)} */}

        {optionGroups &&
          optionGroups.map((group) => (
            <>
              <div>Please select your {group.name}</div>
              {console.log(group)}
              {group.options.map((option) => (
                <>
                  {/* {console.log('Options array ', options)} */}
                  <input
                    type="radio"
                    id={option.value}
                    name={group.name}
                    value={option.value}
                    checked={group.selected === option.value}
                    // onChange={() => handleOptionClick(id, opt.value)}
                    onChange={() => handleOnChange()}
                  />
                  <label htmlFor={option.value}>{option.title}</label>
                  <br />
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

/*

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
                </>
              ))}
            </>
          ))}

*/
