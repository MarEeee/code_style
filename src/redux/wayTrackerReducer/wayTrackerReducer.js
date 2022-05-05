import { SET_CURRENT_ACTIVE_LOCATIONS, CHANGE_DELIVERY_POINT, SET_ORDERS } from './types'

let initialState = {
    orders:[],
    currentLocations: {
        pick_position: {
            x: null,
            y: null
        },
        deliver_position: {
            x: null,
            y: null
        }
    },
    isLoading: true
}

const wayTrackerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS: 
            return { ...state, orders: action.payload, isLoading: false }
        
        
        case SET_CURRENT_ACTIVE_LOCATIONS: 
            return { ...state, currentLocations: action.payload }
        
        case CHANGE_DELIVERY_POINT: 
            const {elementId, dataIndex, newDeliveryPoint, refreshMapMarkers} = action.payload
            let changedElement  = {}
            const neworders = state.orders.map((item) => {
                if( item.id === elementId ) {
                    changedElement = { ...item, [dataIndex]: newDeliveryPoint }
                    return changedElement
                } else {
                    return item
                }
            })
            const newCurrentLocations = {...state.currentLocations, pick_position: changedElement.pick.position, deliver_position: changedElement.deliver.position}
            return refreshMapMarkers ? { ...state, orders: neworders, currentLocations: newCurrentLocations } : { ...state, orders: neworders }
        
          
        default:
            return state
    }    
}

export default wayTrackerReducer