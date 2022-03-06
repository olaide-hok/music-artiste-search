function ArtisteSongs({songs}) {

    const {result} = songs    
    const {full_title, song_art_image_thumbnail_url} = result

  return (
    <div className="col shadow bg-body rounded m-2">
      <div className=" h-100" >
        <img src={song_art_image_thumbnail_url} className="img-fluid" alt={full_title}/>
          <p className="card-text fw-bold fw-3 mt-3">{full_title}</p>        
      </div>
    </div>  
  )
}

export default ArtisteSongs