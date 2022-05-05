import { SET_LOCATION_VARIANTS } from './types'

let initialState = {
    locationVariants: [],
    isLoading: true
}

const constsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATION_VARIANTS:
            return { ...state, locationVariants: action.payload, isLoading: false }

        default:
            return state
    }    
}

export default constsReducer