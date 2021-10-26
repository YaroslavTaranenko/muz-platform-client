import { Button, Grid, TextField } from '@mui/material'
import MainLayout from '../../layouts/MainLayout'
import { useRouter } from 'next/router'
const TrackPage = () => {
  const track = {
    id: 3,
    name: 'Sonne',
    text: 'Sonne song text',
    listens: 0,
    picture: 'images/07b6ce37-c726-4c4d-906c-2e9294223b5c.jpg',
    audio: 'audio/d4e17fab-91d2-4be7-8704-93565de47cd5.mp3',
    album: 'The best of Rammstein',
    artist: 'Rammstein',
    comments: [],
  }
  const router = useRouter()
  return (
    <MainLayout>
      <Button
        variant={'outlined'}
        style={{ fontSize: 23 }}
        onClick={(e) => router.push('/tracks')}
      >
        К списку
      </Button>

      <Grid container style={{ margin: '20px 0' }}>
        <img src={`/${track.picture}`} width={200} height={200} />
        <div style={{ marginLeft: 20 }}>
          <h1>Название: {track.name}</h1>
          <h1>Исполнитель: {track.artist}</h1>
          <h1>Прослушиваний: {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова к песне</h1>
      <p>{track.text}</p>
      <hr />
      <h1>Коментарии</h1>
      <Grid container>
        <TextField label="Ваше имя" fullWidth />
        <TextField label="Коментарий" fullWidth multiline rows={4} />
        <Button>Отправить</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div key={comment.id}>
            <div>Автор: {comment.username}</div>
            <div>Комментарий: {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  )
}

export default TrackPage
