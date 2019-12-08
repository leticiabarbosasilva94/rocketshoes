import React from 'react';
import {
  MdAddCircleOutline,
  MdDelete,
  MdRemoveCircleOutline
} from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/formats';

import { Container, Total, ProductTable } from './styled';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => {
      return {
        ...product,
        subtotal: formatPrice(product.price * product.amount)
      };
    })
  );

  const total = formatPrice(
    cart.reduce((sum, product) => sum + product.price * product.amount, 0)
  );

  const dispatch = useDispatch();

  function handleDelete(product, index) {
    dispatch(cartActions.removeFromCart(index));
  }

  function handleIncrementAmount(index, amount) {
    amount += 1;
    dispatch(cartActions.updateAmount(index, amount));
  }

  function handleDecrementAmount(index, amount) {
    amount -= 1;
    dispatch(cartActions.updateAmount(index, amount));
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => (
            <tr key={String(product.id)}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.formatedPrice}</span>
              </td>
              <td>
                <div>
                  <button
                    onClick={() => handleDecrementAmount(index, product.amount)}
                    type="button"
                  >
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button
                    type="button"
                    onClick={() => handleIncrementAmount(index, product.amount)}
                  >
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(product, index)}
                  type="button"
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
