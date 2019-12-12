export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART_SUCESS': {
      const product = { ...action.product };
      const newState = [...state];

      newState.push(product);
      return newState;
    }

    case 'REMOVE_FROM_CART': {
      const newState = [...state];
      newState.splice(action.index, 1);
      return newState;
    }

    case 'UPDATE_AMOUNT_SUCCESS': {
      const newState = [...state];
      const newAction = { ...action };

      const { amount } = newAction;

      if (amount <= 0) return newState;

      newState[action.index].amount = amount;
      return newState;
    }

    default: {
      return state;
    }
  }
}
