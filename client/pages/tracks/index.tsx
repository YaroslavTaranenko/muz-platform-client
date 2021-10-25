import Navbar from '../../components/Navbar'
import MainLayout from '../../layouts/MainLayout'
import { Box, Button, Card, Grid } from '@mui/material'
import { useRouter } from 'next/dist/client/router'
import TrackList from '../../components/TrackList'
import { ITrack } from '../../types/track'

const Index = () => {
  const router = useRouter()
  const tracks = [
    {
      id: 6,
      name: 'Amerika',
      text: 'amerika song text',
      listens: 0,
      picture: 'images/7c0ae378-00ae-4954-a5f1-efc8a76b3087.jpg',
      audio: 'audio/d2e454d5-b546-49bd-a990-8a86b24666e7.mp3',
      album: 1,
    },
    {
      id: 3,
      name: 'Sonne',
      text: 'Sonne song text',
      listens: 0,
      picture: 'images/07b6ce37-c726-4c4d-906c-2e9294223b5c.jpg',
      audio: 'audio/d4e17fab-91d2-4be7-8704-93565de47cd5.mp3',
      album: 1,
    },
    {
      id: 4,
      name: 'Rammlied',
      text: 'Rammlied song text',
      listens: 0,
      picture: 'images/30524c4f-fb98-4374-acf4-26dcbc8d8d74.jpeg',
      audio: 'audio/e046f9f3-4235-478c-81aa-bf6e9ba4c59f.mp3',
      album: 1,
    },
    {
      id: 5,
      name: 'Benzin',
      text: 'Benzin song text',
      listens: 0,
      picture: 'images/db73d56b-1fdf-466c-b298-69b6ae2706f0.jpeg',
      audio: 'audio/3acdffec-730d-4a00-9107-2d3aaf2ee641.mp3',
      album: 1,
    },
  ]

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
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default Index
