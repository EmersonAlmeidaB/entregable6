import { useEffect } from "react"
import usePlaylist from "../Hooks/usePlaylist"

const PlaylistPage = () => {

const {getPlaylist} = usePlaylist()

useEffect(() => {
    getPlaylist()

}, [])

console.log(Playlist);

  return (
    <article>
        {
            playlist.map(track => (
                <div key={track.id}>
                    <h2>track.title</h2>
                </div>
            ))
        }
    </article>
  )
}

export default PlaylistPage