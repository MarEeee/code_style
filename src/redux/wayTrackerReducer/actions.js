import { SET_CURRENT_ACTIVE_LOCATIONS, CHANGE_DELIVERY_POINT, SET_ORDERS, FETCH_ORDERS } from './types'


export const setOrders = (orders) => {
    return{
        type: SET_ORDERS,
        payload: orders
    }
}

export const fetchOrders = () => {
    return{
        type: FETCH_ORDERS
    }
}

export const setCurrentActiveLocation = (currentLocations) => {
    return{
        type: SET_CURRENT_ACTIVE_LOCATIONS,
        payload: currentLocations
    }
}

export const changeDeliveryPoint = (newDeliveryPoint) => {
    return{
        type: CHANGE_DELIVERY_POINT,
        payload: newDeliveryPoint
    }
}

