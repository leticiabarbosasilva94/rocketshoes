import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import axios from '../../../services/axios';
import { formatPrice } from '../../../utils/formats';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ product, index }) {
  const response = yield call(axios.get, `/products/${product.id}`);

  const productInState = yield select(state => {
    return state.cart.find(p => product.id === p.id);
  });

  const stockData = yield call(axios.get, `/stock/${product.id}`);
  const currentStock = stockData.data.amount;
  const amount = productInState ? productInState.amount + 1 : 1;

  if (amount > currentStock) {
    toast.error(`Só temos ${currentStock} "${product.title}"`);
    return;
  }

  if (productInState) {
    yield put(updateAmountSuccess(index, amount));
  } else {
    const data = {
      ...response.data,
      amount,
      priceFormatted: formatPrice(response.data.price)
    };
    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ index, productAmount, product }) {
  const productInState = yield select(state => {
    return state.cart.find(p => product.id === p.id);
  });

  const stockData = yield call(axios.get, `/stock/${product.id}`);
  const currentStock = stockData.data.amount;
  const amount = productInState ? productInState.amount + 1 : 1;

  if (amount > currentStock) {
    toast.error(`Só temos ${currentStock} "${product.title}"`);
    return;
  }

  yield put(updateAmountSuccess(index, amount));
}

export default all([
  takeLatest('ADD_TO_CART_REQUEST', addToCart),
  takeLatest('UPDATE_AMOUNT_REQUEST', updateAmount)
]);
