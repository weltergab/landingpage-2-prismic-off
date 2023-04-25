import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="Site em desenvolvimento" description="" />
      <p>
        Links para os projetos hospedados e links para os repositórios serão
        adicionados. <br />A sessão de projetos é dinâmica com Prismic CMS. Mais
        sessões serão alteradas para o Prismic.
      </p>

      <br />
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
          year="UFSM"
          title="Bolsista no Núcleo de Tecnologia da Informação"
          description="Manutenção e Suporte em Informática | 02/2021 - 04/2022"
        />
        <ExperienciaItem
          year="Vulcabras Azaleia"
          title="Jovem Aprendiz - SENAI"
          description="Assistente administrativo | 02/2018 - 12/2018"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
