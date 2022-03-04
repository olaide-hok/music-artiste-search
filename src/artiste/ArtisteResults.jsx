import { useContext, useState, useEffect } from 'react'
import Spinner from '../components/Spinner';
import GeniusContext from '../context/genius/GeniusContext'
import Pagination from '../layout/Pagination';
import ArtisteSongs from './ArtisteSongs';

function ArtisteResults() {

  const { artisteSongs, loading } = useContext(GeniusContext)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)
  

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexofFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = artisteSongs.slice(indexofFirstPost, indexOfLastPost)
  console.log(currentPosts);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  if(!loading) { 
    return (
      // <div>
      //   {artisteSongs.slice(0, 5).map(songs => (
      //    <ArtisteSongs songs={songs} key={songs.result.id}/>
      // ))}
      // </div>
      <>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
        {currentPosts.map(songs => (
         <ArtisteSongs songs={songs} key={songs.result.id}/>
      ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage} 
        totalPosts={artisteSongs.length} 
        paginate={paginate}
      />
      </>
    ) 
  } else {
    return null   
  }
}

export default ArtisteResults