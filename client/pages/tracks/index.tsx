import Navbar from '../../components/Navbar'
import MainLayout from '../../layouts/MainLayout'
import { Box, Button, Card, Grid } from '@mui/material'
import { useRouter } from 'next/dist/client/router'

const Index = () => {
  const router = useRouter()

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: '900px' }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список трэков</h1>
              <Button onClick={() => router.push('/tracks/create')}>
                Загрузить
              </Button>
            </Grid>
          </Box>
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default Index
