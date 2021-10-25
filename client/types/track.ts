export interface IComment {
  id: number
  username: string
  text: string
}

export interface ITrack {
  id: number
  name: string
  text: string
  listens: number
  picture: string
  audio: string
  album_id: number
  comments: IComment[]
}
