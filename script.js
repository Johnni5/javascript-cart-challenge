
let cartQuantity = JSON.parse(localStorage.getItem('cartQuantity')) || {
  quantity: 0
};

showQuantity();

function showQuantity() {
  document.querySelector('.js-cartInfo').innerHTML = ` ${cartQuantity.quantity}`;
  localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));
    
}

function addOneItem() {
  if (cartQuantity.quantity < 10) {
    cartQuantity.quantity++;
    let newCount = 10 - cartQuantity.quantity;
    document.querySelector('.js-cartInfo').innerHTML = ` ${cartQuantity.quantity}`;
    document.querySelector('.js-cartInfoText').innerHTML = `Item was added and cart has now ${newCount} slots remaining`;
  } else if (cartQuantity.quantity == 10) {
    document.querySelector('.js-cartInfoText').innerHTML = 'Cart has reached capacity: 10 items';
  }
  localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));
}

function removeOneItem() {
  if (cartQuantity.quantity > 0) {
    cartQuantity.quantity--;
    let newRemoveCount = 10 - cartQuantity.quantity; 
    document.querySelector('.js-cartInfo').innerHTML = ` ${cartQuantity.quantity}`;
    document.querySelector('.js-cartInfoText').innerHTML = `Item was removed, cart has now ${newRemoveCount} slots remaining`;
    } else if (cartQuantity.quantity === 0) {
      document.querySelector('.js-cartInfoText').innerHTML = 'Cart is empty';
    } else {
      document.querySelector('.js-cartInfoText').innerHTML = 'Cart has reached 0: no items left';
  }
  localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));
}

function addTwoItems() {
  if (cartQuantity.quantity <= 8) {
    cartQuantity.quantity+=2;
    newAddCount = 10 - cartQuantity.quantity;
    document.querySelector('.js-cartInfo').innerHTML = ` ${cartQuantity.quantity}`;
    document.querySelector('.js-cartInfoText').innerHTML = `Item was added, cart has now ${newAddCount} slots remaining`;
  } else if (cartQuantity.quantity === 9) {
    document.querySelector('.js-cartInfoText').innerHTML = 'Cart has only one slot remaining - please remove one item.';
  } else if (cartQuantity.quantity === 10) {
    document.querySelector('.js-cartInfoText').innerHTML = 'Cart has reached capacity: 10 items';
  } else {
      document.querySelector('.js-cartInfoText').innerHTML = 'Cart is empty';
  }
  localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));
}

function removeTwoItems() {
  if (cartQuantity.quantity >= 2) {
    cartQuantity.quantity-=2;
    newSubCount = 10 - cartQuantity.quantity;
    document.querySelector('.js-cartInfo').innerHTML = ` ${cartQuantity.quantity}`;
    document.querySelector('.js-cartInfoText').innerHTML = `Two Items were removed, cart has now ${newSubCount} slots remaining`; 
  } else if (cartQuantity.quantity === 1) {
    document.querySelector('.js-cartInfoText').innerHTML = 'Cart has only one item - this will not work .';
  } else if (cartQuantity.quantity === 0) {
    document.querySelector('.js-cartInfoText').innerHTML = 'Cart has reached 0: no items left';
  }
  localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));
}

function addThreeItems() {
  if (cartQuantity.quantity <= 7) {
    cartQuantity.quantity+=3;
    let newAdd3Count = 10 - cartQuantity.quantity;
    document.querySelector('.js-cartInfo').innerHTML = ` ${cartQuantity.quantity}`;
    document.querySelector('.js-cartInfoText').innerHTML = `Three Items were added, cart has now ${newAdd3Count} slots remaining`; 
  } else if (cartQuantity.quantity === 8 || cartQuantity.quantity === 9) {
      let newAdd3Count = 10 - cartQuantity.quantity;
      document.querySelector('.js-cartInfoText').innerHTML = `Cart has only ${newAdd3Count} slot\(s\) free - this will not work.`;
  } else if (cartQuantity.quantity === 10) {
      document.querySelector('.js-cartInfoText').innerHTML = 'Cart has reached capacity: 10 items';
  }
  localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));
}

function removeThreeItems() {
  if (cartQuantity.quantity >= 3) {
    cartQuantity.quantity-=3;
    let newSub3Count = 10 -cartQuantity.quantity;
    document.querySelector('.js-cartInfo').innerHTML = ` ${cartQuantity.quantity}`;
    document.querySelector('.js-cartInfoText').innerHTML = `Three Items were removed, cart has now ${newSub3Count} slots remaining`; 
  } else if (cartQuantity.quantity === 2) {
    document.querySelector('.js-cartInfoText').innerHTML = 'Cart has only two items - this will not work.';
  } else if (cartQuantity.quantity === 1) {
    document.querySelector('.js-cartInfoText').innerHTML = 'Cart has only one item - this will not work.';
  } else if (cartQuantity.quantity === 0) {
    document.querySelector('.js-cartInfoText').innerHTML = 'Cart is empty: 10 slots remaining';
  }
  localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));
}

function addFiveItems() {
  if (cartQuantity.quantity <= 5) {
    cartQuantity.quantity+=5;
    let newAdd5Count = 10 - cartQuantity.quantity;
    document.querySelector('.js-cartInfo').innerHTML = ` ${cartQuantity.quantity}`;
    document.querySelector('.js-cartInfoText').innerHTML = `Five Items added, cart has now ${newAdd5Count} slots remaining`; 
  } else if (cartQuantity.quantity >= 6) {
      document.querySelector('.js-cartInfoText').innerHTML = 'Cart has not enough slots free';
  } else if (cartQuantity.quantity === 10) {
      document.querySelector('.js-cartInfoText').innerHTML = 'Cart has reached capacity: 10 items';
  }
  localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));
}

function removeFiveItems() {
  if (cartQuantity.quantity >= 5) {
    cartQuantity.quantity-=5;
    let newSub5Count = 10 -cartQuantity.quantity;
    document.querySelector('.js-cartInfo').innerHTML = ` ${cartQuantity.quantity}`;
    document.querySelector('.js-cartInfoText').innerHTML = `Fivee Items were removed, cart has now ${newSub5Count} slots remaining`; 
  } else if (cartQuantity.quantity === 2) {
    document.querySelector('.js-cartInfoText').innerHTML = 'Cart has only two items - this will not work.';
  } else if (cartQuantity.quantity === 1) {
    document.querySelector('.js-cartInfoText').innerHTML = 'Cart has only one item - this will not work.';
  } else if (cartQuantity.quantity === 0) {
    document.querySelector('.js-cartInfoText').innerHTML = 'Cart is empty: 10 slots remaining';
  }
  localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));
}

function resetCart() {
  cartQuantity.quantity = 0;
  localStorage.removeItem('cartQuantity');
  document.querySelector('.js-cartInfo').innerHTML = ` ${cartQuantity.quantity}`;
  document.querySelector('.js-cartInfoText').innerHTML = 'Cart was reset and is now empty';
}
