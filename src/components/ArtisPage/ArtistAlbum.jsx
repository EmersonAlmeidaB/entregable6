import AlbumCard from "./AlbumCard"

const ArtistAlbum = ({ albums }) => {
  return (
    <section>
        <h3>artist's Album</h3>
        <div>
            {
                albums?.map(albumInfo => (
                    <AlbumCard
                    key={albumInfo.id}
                    album={albumInfo}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default ArtistAlbum