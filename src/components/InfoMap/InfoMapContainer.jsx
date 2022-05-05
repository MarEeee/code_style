 // *** NPM ***
 import { connect } from 'react-redux'

 // *** OTHER *** 
 import InfoMap from './InfoMap'

let mapStateToProps = ( state ) =>{
    return{
        currentLocations: state.globalStore.currentLocations,
    }
}

const InfoMapContainer = connect(mapStateToProps, {})(InfoMap)

export default InfoMapContainer