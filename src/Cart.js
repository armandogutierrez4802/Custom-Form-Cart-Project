import React from 'react';
import CartItem from './CartItem';
// import Category from './Category';

// =========== Cart Component ===========
const Cart = ({
  updatePage,
  cartItems,
  // options,
  categories,
  handleCartItemClick,
  handleOptionClick,
  updateQty,
  specialRequest,
  setSpecialRequest,
  // total,
}) => {
  // =========== Category Component ===========
  const Category = ({ category, allCartItems }) => {
    const items = allCartItems.filter(
      (item) => item.category === category.value
    );

    return (
      <>
        <h3>{category.title}</h3>
        {items.map((item) => (
          <CartItem
            title={item.title}
            price={item.price}
            selected={item.selected}
            category={item.category}
            qty={item.qty}
            id={item.id}
            optionGroups={item.optionGroups}
            handleCartItemClick={handleCartItemClick}
            handleOptionClick={handleOptionClick}
            updateQty={updateQty}
          />
        ))}
      </>
    );
  };

  const getTotal = () => {
    const selectedItems = cartItems.filter((item) => item.selected === true);
    const allItemTotals = selectedItems.map((item) => item.price * item.qty);
    const newTotal = allItemTotals.reduce((prev, curr) => prev + curr, 0);
    return newTotal.toFixed(2);
  };

  return (
    <>
      <h2>Cart</h2>
      <div id="cart">
        {categories.map((category) => (
          <Category category={category} allCartItems={cartItems} />
        ))}
        {/* <h3>Total: ${total.toFixed(2)}</h3> */}
        <h3>Total: ${getTotal()}</h3>
        <label>Special Requests:</label> <br />
        <textarea name="" id="" cols="30" rows="5"></textarea> <br />
        <button type="button" onClick={() => updatePage('checkout')}>
          Continue
        </button>
      </div>
    </>
  );
};

export default Cart;
