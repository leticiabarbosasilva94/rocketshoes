import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import axios from '../../services/axios';
import { ProductList } from './styled';
import { formatPrice } from '../../utils/formats';

export default function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

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

  function handleAddToCart(product) {
    dispatch({
      type: 'ADD_TO_CART',
      product
    });
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={String(product.id)}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.formatedPrice}</span>

          <button type="button" onClick={() => handleAddToCart(product)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>

            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
