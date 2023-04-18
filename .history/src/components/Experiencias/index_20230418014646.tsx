import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="Experiências" description="" />

      <section>
        <ExperienciaItem
          year="InverseVR"
          title="Desenvolvedor Unity"
          description="Desenvolvimento para VR na Unity Game Engine com C# | 06/2022 - 04/2022"
        />
        <ExperienciaItem
          year="Tchê Turbo | UFSM"
          title="Bolsista na Tchê Turbo Provedor de Internet"
          description="Pesquisa e desenvolvimento na área de redes | 05/2022 - 07/2022"
        />
        <ExperienciaItem
          year="2021"
          title="Dev Frondsa dsa t-end"
          description="Lorem idsadas psum dolor sit amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienciaItem
          year="2020"
          title="Dev Front-end"
          description="Lorem ipsumdsada  dolor sit amet, consectetur adipiscing elit. Aliquam"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
