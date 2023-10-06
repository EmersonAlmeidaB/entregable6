import { useEffect, useRef, useState } from "react"
import useFetch from "../Hooks/useFetch"
import TrackCard from "../components/HomePage/TrackCard"

const HomePage = () => {

  const [ listTracks, getListTracks ] = useFetch()
  const [ inputValue, setInputValue ] = useState('inxs')
  const [quantityPerPage, setQuantityPerPage] = useState(10)

  useEffect(() => {
    getListTracks(`/api/tracks?limit=${quantityPerPage}&q=${inputValue}`)
  },[inputValue, quantityPerPage])

  const inputSearch = useRef()

  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const handleTracksPerPage = e => {
    setQuantityPerPage(e.target.value)
  }

  return (
    <div>
      <div className="homepage">
        <form className="homepage__form" onSubmit={handleSearch} >
         <input className="homepage__input" ref={inputSearch} type="text" />
         <select className="homepage__selec" onChange={handleTracksPerPage} defaultValue={10}>
          {
            [2,4,6,8,10].map(tracksPerPage => (
              <option 
              key={tracksPerPage} 
              value={tracksPerPage}
              >{tracksPerPage}</option>
            ))
          }
         </select>
        </form>
        <div>
          {
            listTracks?.tracks.items.map(track => (
              <TrackCard
              key={track.id}
              track={track}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage