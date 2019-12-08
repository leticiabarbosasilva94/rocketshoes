export function removeFromCart(index) {
  return {
    type: 'REMOVE_FROM_CART',
    index
  };
}

export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
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
