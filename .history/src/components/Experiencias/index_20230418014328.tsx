import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="Experiências" description="" />

      <section>
        <ExperienciaItem
          year="Desenvolvedor Unity"
          title="InverseVR"
          description="Desenvolvimento para VR na Unity Game Engine com C# | 06/2022 - 04/2022"
        />
        <ExperienciaItem
          year="2021"
          title="Dev Front-sasend"
          description="Lorem ipsum sss dolor sit amet, consectetur adipiscing elit. Aliquam"
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
