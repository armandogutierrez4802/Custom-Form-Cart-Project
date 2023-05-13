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
  // const localData = localStorage.getItem(' page');
  // const initialPage = localData ? JSON.parse(localData) : 'start';

  // console.log(localData);
  // console.log(initialPage);

  //States
  // const [page, setPage] = useState(initialPage);
  // const [page, setPage] = useState(localStorage.getItem('page'));
  const [page, setPage] = useState('cart');

  const [cartItems, setCartItems] = useState(initialCartItems);
  // const [total, setTotal] = useState(0);
  const [specialRequest, setSpecialRequest] = useState('');
  const [checkoutInfo, setCheckoutInfo] = useState([]);

  //Local Storage
  // useEffect(() => {
  // console.log('useEffect');
  // const localData = localStorage.getItem('page');
  // console.log(localData);
  // setPage(localData ? JSON.parse(localData) : 'start');
  // localStorage.setItem('page', localData ? JSON.parse(localData) : 'start');
  // localStorage.setItem('page', page);
  // }, [page]);

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
    setCartItems(newCartItems);
  };

  const handleOptionClick = (id, groupName, newOptionValue, newExtraCharge) => {
    // Update the selected option in group with the value of the selected option
    // Update the extra charge of group based on newly selected option

    // Do it in parallel, I have access to my current cart state via cartItems.map => (item)
    // I also have access to my new stuff via the parameters
    // How about I take the old price stored in cartItems state, and find the difference between
    // that and the new price I generate here....maybe I can do cartItems.reduce and sum up the base
    // price with the all current selected options
    // Then generate my newCartItems with newly selected values (might not work)
    /*
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        // let totalOptionCharges = 0;
        item.price = item.basePrice;
        // group.totalExtraCharge = newExtraCharge;
        item.optionGroups.map((group) => {
          // totalOptionCharges = group.totalExtraCharge;
          // group.totalExtraCharge = newExtraCharge;
          if (group.name === groupName) {
            group.selected = newOptionValue; // Keep this
            // item.price = item.basePrice + extraCharge;
            // item.price = item.basePrice + extraCharge;
            // totalOptionCharges += newExtraCharge;
            item.price = item.basePrice + newExtraCharge;
          } else {
            let otherSelectedOption = group.selected;
          }

          group.totalExtraCharge = item.price - item.basePrice;
        });
        // console.log(sumOptionCharges);
        // item.price = item.basePrice + totalOptionCharges;
      }
      return item;
    });

    */

    const newCartItems = cartItems.map((item) => {
      let newTotal;
      //Find the item that we selected
      if (item.id === id) {
        // Start with base price
        newTotal = item.basePrice;
        // Go through each group of options (Ex. size, filling, etc)
        item.optionGroups.map((group) => {
          //If we are in the group that we changed
          if (group.name === groupName) {
            // Update group's selected value
            group.selected = newOptionValue;
            // Update group's extra charge based on selected value
            group.extraCharge = newExtraCharge;
            newTotal += newExtraCharge;
          } else {
            // If not in the group we changed
            // Then add the extra charge from the current group
            newTotal += group.extraCharge;
          }
        });
        // Update item's price with newTotal accounting for all selected options
        item.price = newTotal;
      }
      return item;
    });

    setCartItems(newCartItems);
  };

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
    setCartItems(newCartItems);
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
        handleOptionClick={handleOptionClick}
        updateQty={updateQty}
        specialRequest={specialRequest}
        setSpecialRequest={setSpecialRequest}
        // total={total}
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
