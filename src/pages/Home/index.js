import React, { useState, useEffect, useCallback } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../services/axios';
import { ProductList } from './styled';
import { formatPrice } from '../../utils/formats';
import * as cartActions from '../../store/modules/cart/actions';

export default function Home() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const amountInCart = useSelector(state =>
    state.cart.reduce((amount, product) => {
      amount[Number(product.id)] = product.amount;
      return amount;
    }, [])
  );

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/products');
      const data = response.data.map(p => ({
        ...p,
        formatedPrice: formatPrice(p.price)
      }));
      setProducts(data);
    }

    getData();
  }, []);

  const handleAddToCart = useCallback(
    (product, index) => {
      dispatch(cartActions.addToCartRequest(product, index));
    },
    [dispatch]
  );

  return (
    <ProductList>
      {products.map((product, index) => (
        <li key={String(product.id)}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.formatedPrice}</span>

          <button type="button" onClick={() => handleAddToCart(product, index)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />{' '}
              {amountInCart[Number(product.id)] || 0}
            </div>

            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
