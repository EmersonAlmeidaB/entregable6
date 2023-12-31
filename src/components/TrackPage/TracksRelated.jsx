import { useEffect } from "react"
import useFetch from "../../Hooks/useFetch"
import TrackCard from "../HomePage/TrackCard"

const TracksRelated = ({ artist }) => {

const [ tracksList, getTracksList ] = useFetch()
useEffect(() => {
    if (artist) {
        getTracksList(`/api/tracks?limit=10&q=${artist}`)   
    }
},[artist])


  return (
    <section>
        <h3>Track related</h3>
        <div>
            {
                tracksList?.tracks.items.map(track => (
                    <TrackCard
                    key={track.id}
                    track={track}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default TracksRelated