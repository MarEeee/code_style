 // *** NPM ***
 import { connect } from 'react-redux'

 // *** OTHER *** 
 import OrderTable from './OrderTable'
 import { setCurrentActiveLocation, changeDeliveryPoint, fetchOrders } from '../../redux/wayTrackerReducer/actions'
 import { fetchLocationVariants } from '../../redux/constsReducer/actions'

let mapStateToProps = ( state ) =>{
    return{
        orders: state.globalStore.orders,
        locationVariants: state.constValue.locationVariants,
        isLoading: state.globalStore.isLoading,
    }
}

const OrderTableContainer = connect(mapStateToProps, { setCurrentActiveLocation, changeDeliveryPoint, fetchOrders, fetchLocationVariants })(OrderTable)

export default OrderTableContainer