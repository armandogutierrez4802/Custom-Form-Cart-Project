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
  // category,
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
                  {/* {console.log(
                    'id - option.value: ',
                    `${id} - ${option.value}`
                  )}
                  {console.log(
                    'id - group.selected: ',
                    `${id} - ${group.selected}`
                  )}
                  {console.log('----------------------------')} */}
                  {/* {console.log('----------------------------')} */}
                  {/* {console.log('id - group.name', `${id}-${group.name}`)} */}
                  {/* {console.log('group.name ', group.name)} */}
                  {/* {console.log('----------------------------')} */}
                  <input
                    type="radio"
                    id={option.value}
                    // id={`${id}-${option.value}`}
                    // *** WILL NEED TO DO SOMETHING ABOUT GROUP NAME.
                    // *** IT'S GROUPING DIFFERENT CART ITEMS OPTIONS
                    // *** WHEN NEW ITEMS GET CLICKED ON
                    name={`${id}-${group.name}`}
                    // name={group.name}
                    value={option.value}
                    // I THINK THE PROBLEM IS WITH THE CHECKED!!!! OOORRR WITH PASSING IN THE GROUP.NAME IN OPTION CLICK HANDLER
                    checked={group.selected === option.value}
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
                  {/* <label htmlFor={`${id}-${option.value}`}>
                    {option.title}
                  </label> */}
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
