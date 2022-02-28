const geniusReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ARTISTE_SONGS':
            return {
                ...state,
                artisteSongs: action.payload
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'CLEAR_ARTISTE_SONGS':
            return {
                ...state,
                artisteSongs: []
            }
        default:
            return state
    }
}

export default geniusReducer