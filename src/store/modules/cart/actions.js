export function removeFromCart(index) {
  return {
    type: 'REMOVE_FROM_CART',
    index
  };
}

export function addToCartRequest(product) {
  return {
    type: 'ADD_TO_CART_REQUEST',
    product
  };
}

export function addToCartSuccess(product) {
  return {
    type: 'ADD_TO_CART_SUCESS',
    product
  };
}

export function updateAmount(index, amount) {
  return {
    type: 'UPDATE_AMOUNT',
    index,
    amount
  };
}
