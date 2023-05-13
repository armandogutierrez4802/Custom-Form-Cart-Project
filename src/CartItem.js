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

        {optionGroups &&
          optionGroups.map((group) => (
            <>
              <div>Please select your {group.name}</div>

              {group.options.map((option) => (
                <>
                  {/* {console.log('item id = id = ', id)}
                  {console.log('id = option.value = ', option.value)}
                  {console.log('name = group.value = ', group.name)} */}
                  <input
                    type="radio"
                    id={option.value}
                    // *** WILL NEED TO DO SOMETHING ABOUT GROUP NAME.
                    // *** IT'S GROUPING DIFFERENT CART ITEMS OPTIONS
                    // *** WHEN NEW ITEMS GET CLICKED ON
                    name={group.name}
                    value={option.value}
                    checked={group.selected === option.value}
                    // onChange={() => handleOptionClick(id, opt.value)}
                    // handleOptionClick() will set group.selected = option.value and update the cart items
                    onChange={(e) => {
                      console.log(e);
                      // const prevPrice
                      handleOptionClick(
                        id,
                        group.name,
                        option.value,
                        option.optExtraCharge,
                        // price
                      );
                    }}
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
