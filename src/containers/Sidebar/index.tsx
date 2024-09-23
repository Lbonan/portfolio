import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, SiderbarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SiderbarContainer>
      <Avatar />
      <Titulo fontSize={20}>Lucas Bonan</Titulo>
      <Paragrafo tipo="secundaria" fontSize={16}>
        lbonan
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor full stack
      </Descricao>
      <BotaoTema>Trocar de tema</BotaoTema>
    </SiderbarContainer>
  </aside>
)

export default Sidebar
