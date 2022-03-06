import { useState, useContext } from 'react'
import AlertContext from '../context/alert/AlertContext'
import GeniusContext from '../context/genius/GeniusContext'

function ArtisteSearch() {
    const [artisteName, setArtisteName] = useState('')
    
    const {searchArtisteSongs, clearArtisteSongs, artisteSongs } = useContext(GeniusContext)
    const {setAlert} = useContext(AlertContext)   

    // Input Change handler
    const handleChange = (e) => {
        setArtisteName(e.target.value)
    }

    // Form Submit Handler
    const handleSubmit = async (e) => {
        e.preventDefault()        

        if(artisteName === '') {
            setAlert("Please enter valid Artiste's name", 'error')
        } else {                   
            searchArtisteSongs(artisteName)
            setArtisteName('')
        }
    }

  return (
          <div className="">        
            <div className='d-grid col-6 col-xl-10 col-lg-8 
                col-md-6 mb-5 g-2' >
                <div className='px-4'>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control text-black" 
                                placeholder="Enter Artiste's name"
                                aria-label="Enter Artiste's name"
                                aria-describedby="button-addon2"
                                value={artisteName}
                                onChange={handleChange}
                            />
                            <button 
                                type='submit' 
                                className="btn btn-dark btn-lg"
                                id="button-addon2"                                
                                >
                                Search
                            </button>
                        </div>
                    </form>

                </div>
                    {artisteSongs.length > 0 && (<div className='m-4'>
                    <button 
                        onClick={clearArtisteSongs}
                        className="btn btn-dark btn-lg">Clear
                    </button>
                </div>)}
            </div>
        
      </div>
  )
}

export default ArtisteSearch