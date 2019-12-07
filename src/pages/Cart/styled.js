import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #7150c1;
      border: none;
      color: #fff;
      border-radius: 4px;
      padding: 12px 20px;
      text-transform: uppercase;
      transition: filter 600ms;
      font-weight: bold;

      &:hover {
        filter: brightness(80%);
      }
    }
  }
`;
export const ProductTable = styled.table`
  width: 100%;

  th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
    display: block;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    padding: 6px;
    border: none;
    color: #7150c1;
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
    display: block;
    margin-right: 10px;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
