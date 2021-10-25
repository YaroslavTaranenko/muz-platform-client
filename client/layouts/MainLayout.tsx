import Navbar from '../components/Navbar'
import { Container } from '@mui/material'

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container style={{ margin: '95px auto' }}>{children}</Container>
    </>
  )
}

export default MainLayout
