import { FETCH_LOCATION_VARIANTS, SET_LOCATION_VARIANTS } from './types'


export const setLocationVariants = (locationVariants) => {
    return{
        type: SET_LOCATION_VARIANTS,
        payload: locationVariants
    }
}

export const fetchLocationVariants = () => {
    return{
        type: FETCH_LOCATION_VARIANTS
    }
}