import { useContext, useState } from 'react'
import Spinner from '../components/Spinner';
import GeniusContext from '../context/genius/GeniusContext'
import Pagination from '../layout/Pagination';
import ArtisteSongs from './ArtisteSongs';

function ArtisteResults() {

  const { artisteSongs, loading } = useContext(GeniusContext)
  const [currentPage, setCurrentPage] = useState(1)
  const [songsPerPage] = useState(5)  

  // get current songs
  const indexOfLastSong = currentPage * songsPerPage
  const indexOfFirstSong = indexOfLastSong - songsPerPage
  const currentSongs = artisteSongs.slice(indexOfFirstSong, indexOfLastSong)

  const paginate = pageNumber => setCurrentPage(pageNumber);

  if(!loading) { 
    return (
      <>
      {currentSongs.length > 0 && <p className='mb-4 fs-4 lh-base'>Top songs according to page views.</p>}
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-3">
        {currentSongs.map(songs => (
         <ArtisteSongs songs={songs} key={songs.result.id}/>
      ))}
      </div>
      <Pagination
        songsPerPage={songsPerPage} 
        totalSongs={artisteSongs.length} 
        paginate={paginate}
      />
      </>
    ) 
  } else {
    return <Spinner />   
  }
}

export default ArtisteResults