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
  updateQty,
  specialRequest,
  setSpecialRequest,
  total,
  updateTotal,
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
            options={item.options}
            handleCartItemClick={handleCartItemClick}
            updateQty={updateQty}
            total={total}
            updateTotal={updateTotal}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <h2>Cart</h2>
      <div id="cart">
        {categories.map((category) => (
          <Category category={category} allCartItems={cartItems} />
        ))}
        <h3>Total: ${total.toFixed(2)}</h3>
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
