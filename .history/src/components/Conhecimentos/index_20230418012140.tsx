// import { AiFillHtml5 } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss, SiCsharp } from 'react-icons/si';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="Tailwind" icon={<SiTailwindcss />} />
        <ConhecimentoItem title="Cs" icon={<SiCsharp />} />
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
