import { Map } from "mapbox-gl";
import { useContext, useEffect, useRef } from "react"
import { PlacesContext } from "../context/places"
import { Loading } from "./Loading"

export const MapView = () => {
    const { isLoading, userLocation } = useContext(PlacesContext);
    const mapDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(!isLoading){
            const map = new Map({
                container: mapDiv.current!, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation, // starting position [lng, lat]
                zoom: 9, // starting zoom
                projection: { name: 'globe' } // display the map as a 3D globe
                });
        }
    }, [isLoading])

    if(isLoading){
        return <Loading/>
    }

    return(
        <div ref={mapDiv} style={{
            height: '100vh',
            left: '0',
            position: 'fixed',
            top: '0',
            width: '100vw'
        }}>
            {userLocation?.join(',')}
        </div>
    )
}