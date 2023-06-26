/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/pessoa.webp';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <div className="line" />
      {/* padding-bottom: 8rem; border-bottom: 3px solid #848DA0; */}
      <img src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Gabriel</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Gabriel,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Welter</span>
            </div>
            {'\u007D'}
            <span className="comment" />
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">Dev Front-end web,</span>
            </div>
            <div>
              Função-2: <span className="blue">Dev Unity</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
