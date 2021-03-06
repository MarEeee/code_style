// *** NPM ***
import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

// *** OTHER ***
import styles from './InfoMap.module.css'
import 'leaflet/dist/leaflet.css'
import MapRouting from './MapRouting'


const InfoMap = (props) => {
    const { pick_position } = props.currentLocations 
    const position = ( pick_position.x ? [pick_position.x, pick_position.y] : [55.7522, 59.6156])
    return(
        <section className={styles.infoMap}>

            <MapContainer center={position} zoom={3} className={styles.mapLayout}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                />
                {pick_position.x && <MapRouting props={props} />}
                
            </MapContainer>
        </section>
    )
}

export default InfoMap