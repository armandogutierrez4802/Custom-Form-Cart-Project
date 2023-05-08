import React, { useState, useEffect } from 'react';
import Start from './Start';
import Cart from './Cart';
import Checkout from './Checkout';
import Confirmation from './Confirmation';

// =========== Feauture Component ===========
const Feature = ({
  initialCartItems,
  // initialPage,
  // options,
  categories,
  pickupTimes,
  paymentMethods,
}) => {
  const localData = localStorage.getItem('page');
  const initialPage = localData ? JSON.parse(localData) : 'start';
  console.log(localData);
  console.log(initialPage);

  //States
  // const [page, setPage] = useState(localStorage.getItem('page'));
  const [page, setPage] = useState('start');
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [total, setTotal] = useState(0);
  const [specialRequest, setSpecialRequest] = useState('');
  const [checkoutInfo, setCheckoutInfo] = useState([]);

  //Local Storage
  useEffect(() => {
    // const localData = localStorage.getItem('page');
    // console.log(localData);
    // setPage(localData ? JSON.parse(localData) : 'start');
    localStorage.setItem('page', page);
  }, [page]);

  //Helper functions
  const handleCartItemClick = (id) => {
    //MAYBE I CAN JUST GET RID OF THIS PART AND JUST DO QTY
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        item.selected = !item.selected;
        if (!item.selected) {
          item.qty = 0;
        } else {
          item.qty = 1;
        }
        if (item.qty === 0) {
          item.selected = false;
        }
      }
      return item;
    });
    updateTotal();
    setCartItems(newCartItems);
  };

  // CHANGING THE QTY DOES NOT CHANGE THE STATUS OF THE CHECKBOX... HOW TO DO THAT???
  const updateQty = (operator, id) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        if (operator === '-') {
          item.qty--;
        } else if (operator === '+') {
          item.qty++;
        }
        if (item.qty === 0) {
          item.selected = false;
        }
      }
      return item;
    });
    updateTotal();
    setCartItems(newCartItems);
  };

  const updateTotal = () => {
    const selectedItems = cartItems.filter((item) => item.selected === true);
    const allItemTotals = selectedItems.map((item) => item.price * item.qty);
    const newTotal = allItemTotals.reduce((prev, curr) => prev + curr, 0);
    setTotal(newTotal);
  };

  const submitForm = (e) => {
    e.preventDefault();
    updatePage('confirmation');

    // Send form data to email
    // ...
    // ...
    // ...
  };

  const updatePage = (page) => {
    setPage(page);
  };

  //Code
  let formComponent;
  if (page === 'start') {
    formComponent = <Start updatePage={updatePage} />;
  } else if (page === 'cart') {
    formComponent = (
      <Cart
        updatePage={updatePage}
        cartItems={cartItems}
        // options={options}
        categories={categories}
        handleCartItemClick={handleCartItemClick}
        updateQty={updateQty}
        specialRequest={specialRequest}
        setSpecialRequest={setSpecialRequest}
        total={total}
        updateTotal={updateTotal}
      />
    );
  } else if (page === 'checkout') {
    formComponent = (
      <Checkout
        updatePage={updatePage}
        pickupTimes={pickupTimes}
        paymentMethods={paymentMethods}
      />
    );
  } else if (page === 'confirmation') {
    formComponent = <Confirmation />;
  }

  return (
    <>
      <form onSubmit={submitForm}>{formComponent}</form>
    </>
  );
};

export default Feature;
