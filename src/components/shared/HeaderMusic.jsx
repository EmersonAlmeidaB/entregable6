import { useSelector } from "react-redux"
import TrackList from "./TrackList"
import { useForm } from "react-hook-form"
import usePlaylist from "../../Hooks/usePlaylist"

const HeaderMusic = () => {

    const tracksPlaylist = useSelector(store => store.tracks)

    const { reset, handleSubmit, register } = useForm()
    const { postPlaylist } = usePlaylist()

    const submit = data => {
        const obj = {
            ...data,
            tracks: tracksPlaylist.map(e => ({ id: e.id }) )
        }
        postPlaylist(obj)
        reset({
        title:'',
        to:'',
        message: ''
    })

    } 
    
  return (
    <header>
        <h1>Gift Music</h1>
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input {...register('title')} type="text" id='title' />
                </div>
                <div>
                    <label htmlFor="to">To</label>
                    <input {...register('to')} type="text" id='to' />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea {...register('message')} type="text" id='message' />
                </div>
                <div>
                    {
                        tracksPlaylist.map(track => (
                            <TrackList
                                key={track.id}
                                track={track}
                            />
                        ))
                    }
                </div>
                <button>Create</button>
            </form>
        </div>
    </header>
  )
}

export default HeaderMusic