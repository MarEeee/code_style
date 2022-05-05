// *** NPM ***
import React, { useState, useRef } from 'react'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';


// *** OTHER ***
import styles from './WayTracker.module.css'
import OrderTableContainer from '../OrderTable/OrderTableContainer'
import InfoMapContainer from '../InfoMap/InfoMapContainer'


const WayTracker = () => {
    const [initialPos,   setInitialPos] = useState(null);
    const [initialSize, setInitialSize] = useState(null);
    const ref = useRef();

    const initial = (e) => {
        setInitialPos(e.clientX);
        setInitialSize(ref.current.offsetWidth )
    }
    
    const resize = (e) => {
        ref.current.style.width = `${parseInt(initialSize) + parseInt(e.clientX - initialPos)}px`  
    }
    return(
        <section className={styles.wayTracker}>
            <div className={styles.resizable} ref={ref}>
                <OrderTableContainer /> 
            </div>
            <div className={styles.draggable}                
                draggable='true'
                onDragStart={initial} 
                onDrag={resize}
            >
                <DoubleLeftOutlined />
                <hr className={styles.line}/>
                <DoubleRightOutlined />
            </div>
            <InfoMapContainer/>

        </section>
    )

}

export default WayTracker