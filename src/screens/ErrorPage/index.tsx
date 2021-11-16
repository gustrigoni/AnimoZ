import React from 'react';

import {
  Container,
  GokuIcon,
  Row,
  Message,
  Description,
  Emoji,
  Warning,
  Button,
} from './styles';

export function ErrorPage() {
  return (
    <Container>
      <GokuIcon />
      <Row>
        <Message>Erro / <b>404</b></Message>
        <Description>
          Hmm, estranho...
          {/* eslint-disable-next-line */}
          <Emoji>🤔</Emoji>
        </Description>
        <Warning>A página que você está tentando acessar não existe.</Warning>
        <Button>Voltar</Button>
      </Row>
    </Container>
  );
}