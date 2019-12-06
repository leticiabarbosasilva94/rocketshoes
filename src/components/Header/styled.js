import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${props => (props.error ? 'red' : 'blue')};
`;
