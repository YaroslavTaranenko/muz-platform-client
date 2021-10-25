import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import { ITrack } from '../types/track'
import TrackItem from './TrackItem'

interface TrackListProps {
  tracks: ITrack[]
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem key={track.id} track={track} />
        ))}
      </Box>
    </Grid>
  )
}

export default TrackList
