function ArtisteSongs({songs}) {

    const {result} = songs
    
    const {full_title, song_art_image_thumbnail_url} = result


  return (
    <div className="container px-4 py-5">
        <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: `url(${song_art_image_thumbnail_url})`, width:'400px' }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 lh-1 fw-bold">{full_title}</h2>
            </div>
            </div>
        </div>
  </div>
  )
}

export default ArtisteSongs