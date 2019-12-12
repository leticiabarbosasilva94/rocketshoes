export function removeFromCart(index) {
  return {
    type: 'REMOVE_FROM_CART',
    index
  };
}

export function addToCartRequest(product, index) {
  return {
    type: 'ADD_TO_CART_REQUEST',
    product,
    index
  };
}

export function addToCartSuccess(product) {
  return {
    type: 'ADD_TO_CART_SUCESS',
    product
  };
}

export function updateAmountRequest(index, amount, product) {
  return {
    type: 'UPDATE_AMOUNT_REQUEST',
    index,
    amount,
    product
  };
}

export function updateAmountSuccess(index, amount) {
  return {
    type: 'UPDATE_AMOUNT_SUCCESS',
    index,
    amount
  };
}
