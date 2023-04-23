import { ReactNode } from 'react';

import { Container } from './styles';

interface ApresentacaoProps {
  children: ReactNode;
}

export function Apresentacao({ children }: ApresentacaoProps) {
  return (
    <Container>
      <h1>Apresentacao</h1>
      {children}
    </Container>
  );
}
