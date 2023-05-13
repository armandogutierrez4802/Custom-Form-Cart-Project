import React from 'react';

/*
TASKS: 
- SAVE SELECT STATE OF OPTIONS IN CART ITEMS (JUST LIKE QTY)
- UPDATING QTY WILL UPDATE HOW MANY OPTIONS LISTS WILL RENDER


X SELECTING SPECIFIC OPTION (LIKE CAKE SIZE, WILL CHANGE CARTITEM PRICE)
*/

// =========== CartItem Component ===========
const CartItem = ({
  title,
  price,
  selected,
  qty,
  id,
  optionGroups,
  handleCartItemClick,
  handleOptionClick,
  updateQty,
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
                  <input
                    type="radio"
                    id={option.value}
                    // name={group.name}
                    name={`${id}-${group.name}`}
                    value={option.value}
                    checked={
                      group.selected === option.value && group.groupId === id
                    }
                    onChange={() =>
                      handleOptionClick(
                        id,
                        group.name,
                        option.value,
                        option.optExtraCharge
                      )
                    }
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

  // DO I NEED A STATE FOR EACH CART ITEM TO KEEP TRACK OF WHICH ITEMS ARE SELECTED ???????

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
