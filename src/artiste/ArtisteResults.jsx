import { useContext } from 'react'
import Spinner from '../components/Spinner';
import GeniusContext from '../context/GeniusContext'
import ArtisteSongs from './ArtisteSongs';

function ArtisteResults() {

  const { artisteSongs, loading } = useContext(GeniusContext)

  return (
    <div>
      {artisteSongs.slice(0, 5).map(songs => {
      return <ArtisteSongs songs={songs} key={songs.result.id}/>
    })}
    </div>
  )

  // if(!loading) { 
  //   return (
  //     <div>
  //       {artisteSongs.slice(0, 5).map(songs => {
  //       return <ArtisteSongs songs={songs} key={songs.result.id}/>
  //     })}
  //     </div>

            
  //     ) 
  // } else {
  //   return <Spinner />   
  // }
  
}

export default ArtisteResults