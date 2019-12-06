import React from 'react';

import { Container, Title, Content } from './styled';

export default function Page404() {
  return (
    <Container>
      <Title>Error 404</Title>
      <Content>The page you&apos;re looking for does not exist.</Content>
    </Container>
  );
}
