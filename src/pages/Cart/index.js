import React from 'react';
import {
  MdAddCircleOutline,
  MdDelete,
  MdRemoveCircleOutline
} from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Total, ProductTable } from './styled';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  function handleDelete(product, index) {
    dispatch({
      type: 'REMOVE_FROM_CART',
      index
    });
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
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.formatedPrice}</strong>
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
          <strong>R$1920,20</strong>
        </Total>
      </footer>
    </Container>
  );
}
