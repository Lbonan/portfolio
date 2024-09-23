import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ipsum eum
      quidem veritatis repellat laborum atque blanditiis alias saepe qui officia
      minima earum explicabo, sed eligendi quis amet odio reiciendis!
    </Paragrafo>
    <GitHubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=Lbonan&theme=tokyonight&show_icons=true&hide_border=true&count_private=false"
        alt="Tabela de status do github"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Lbonan&theme=tokyonight&show_icons=true&hide_border=true&layout=compact"
        alt="Linguagens mais usadas"
      />
    </GitHubSecao>
  </section>
)

export default Sobre
