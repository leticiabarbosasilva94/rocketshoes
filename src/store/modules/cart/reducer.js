export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const product = { ...action.product, amount: 1 };
      let newState = [...state];

      const productInCart = newState.filter(stateProduct => {
        return product.id === stateProduct.id;
      });

      if (productInCart.length < 1) {
        newState.push(product);
      } else {
        newState = newState.map(p => {
          if (product.id === p.id) {
            p.amount += 1;
          }

          return p;
        });
      }

      return newState;
    }

    case 'REMOVE_FROM_CART': {
      const newState = [...state];
      newState.splice(action.index, 1);
      return newState;
    }

    default: {
      return state;
    }
  }
}
