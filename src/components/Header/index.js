import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
    </Nav>
  );
}
