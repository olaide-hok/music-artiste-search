function ArtisteSongs({songs}) {

    const {result} = songs
    
    const {full_title, song_art_image_thumbnail_url} = result


  return (
    <div className="col shadow bg-body rounded m-1">
      <div className=" h-100" >
        <img src={song_art_image_thumbnail_url} className="img-fluid" alt={full_title}/>
        <div className="card-body border-top">
          <h4 className="card-text">{full_title}</h4>
        </div>
      </div>
    </div>
  
  )
}

export default ArtisteSongs