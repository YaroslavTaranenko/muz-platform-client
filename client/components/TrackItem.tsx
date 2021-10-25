import { Card, IconButton, Container, Grid } from '@mui/material'
import { ITrack } from '../types/track'
import styles from '../styles/TrackItem.module.scss'
import { Pause, PlayArrow } from '@mui/icons-material'

interface TrackItemProps {
  track: ITrack
  active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  return (
    <Card className={styles.track}>
      <IconButton>{active ? <Pause /> : <PlayArrow />}</IconButton>
      <img width={70} height={70} src={`/${track.picture}`} />
      <Grid container direction="column">
        <div>{track.name}</div>
        <div>{track.name}</div>
      </Grid>
    </Card>
  )
}

export default TrackItem
