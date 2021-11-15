import React from 'react';

import { Button } from 'react-bootstrap';

export function ErrorPage() {
  return (
    <div className="screen-error404-main-container">
      <img src={require('./../../assets/images/dbz/goku-cansado.png')} alt="carregando..." />
      <div className="screen-error404-container">
        <p>
          Erro / <b>404</b>
        </p>
        <h2>Hmm, estranho... <span role="img" aria-label="Thinking head">🤔</span></h2>
        <span>A página que você está tentando acessar não existe.</span>
        <Button className="botaoVoltar" variant="danger" size="lg" href="/">Voltar</Button>
      </div>
    </div>
  );
}