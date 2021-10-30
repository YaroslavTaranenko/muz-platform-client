import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'
import styles from '../styles/player.module.scss'
import TrackProgress from './TrackProgress'

const Player = () => {
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
  const active = false
  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: '0 20px' }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 14, color: 'gray' }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => {}} />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={0} right={100} onChange={() => {}} />
    </div>
  )
}

export default Player
