import Navbar from '../components/Navbar'
import { Container } from '@mui/material'
import Player from '../components/player'

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container style={{ margin: '95px auto' }}>{children}</Container>
      <Player />
    </>
  )
}

export default MainLayout
