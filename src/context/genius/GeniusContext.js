import { createContext, useReducer } from "react";
import geniusReducer from "./GeniusReducer";

const GeniusContext = createContext()

export const GeniusProvider = ({children}) => {
    const initialState = {
        artisteSongs: [],
        loading: false
    }

    const [state, dispatch] = useReducer(geniusReducer, initialState)

    const searchArtisteSongs = async (name) => {
        setLoading()

       // convert first letter to uppercase
        const artisteName = name.charAt(0).toUpperCase() + name.slice(1);

      // set artiste's name as query parameter
        const params = new URLSearchParams({
          q: artisteName
      })

      const response = await fetch(`https://genius.p.rapidapi.com/search?${params}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "genius.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.REACT_APP_GENIUS_LYRICS_API_KEY}`
        }
      })

      const data  = await response.json()
      const { hits } = data.response

      dispatch({
          type: 'GET_ARTISTE_SONGS',
          payload: hits
      })
    }

    // Clear Artiste Songs from State
    const clearArtisteSongs = () => dispatch({ type: 'CLEAR_ARTISTE_SONGS'})

    // Set Loading
    const setLoading = () => {
       return dispatch({type: 'SET_LOADING'})
    }

    return <GeniusContext.Provider value={{
        artisteSongs: state.artisteSongs,
        loading: state.loading,
        searchArtisteSongs,
        clearArtisteSongs
    }}
    >
        {children}
    </GeniusContext.Provider>

}

export default GeniusContext