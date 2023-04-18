// import { AiFillHtml5 } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss, SiCsharp, SiUnity } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="Next" icon={<TbBrandNextjs />} />
        <ConhecimentoItem title="Tailwind" icon={<SiTailwindcss />} />
        <ConhecimentoItem title="Unity" icon={<SiUnity />} />
        <ConhecimentoItem title="C#" icon={<SiCsharp />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
