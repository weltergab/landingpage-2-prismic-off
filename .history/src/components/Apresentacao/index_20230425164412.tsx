import { ReactNode } from 'react';

import { Container } from './styles';

interface ApresentacaoProps {
  children: ReactNode;
}

export function Apresentacao({ children }: ApresentacaoProps) {
  return (
    <Container>
      <h1>Site em desenvolvimento</h1>
      <p>
        Links para os projetos hospedados e links para os repositórios serão
        adicionados
      </p>
      <h1>Apresentacao</h1>
      {children}
    </Container>
  );
}
