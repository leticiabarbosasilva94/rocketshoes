import { call, put, all, takeLatest } from 'redux-saga/effects';
import axios from '../../../services/axios';

import { addToCartSuccess } from './actions';

function* addToCart({ product }) {
  const response = yield call(axios.get, `/products/${product.id}`);

  yield put(addToCartSuccess(response.data));
}

export default all([takeLatest('ADD_TO_CART_REQUEST', addToCart)]);
