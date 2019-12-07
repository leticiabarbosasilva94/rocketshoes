import React from 'react';
import {
  MdAddCircleOutline,
  MdDelete,
  MdRemoveCircleOutline
} from 'react-icons/md';

import { Container, Total, ProductTable } from './styled';

export default function Cart() {
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
          <tr>
            <td>
              <img src="https://picsum.photos/id/532/800/800" alt="pic" />
            </td>
            <td>
              <strong>Tenis legal</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete />
              </button>
            </td>
          </tr>
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
