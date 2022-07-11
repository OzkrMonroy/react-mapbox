import { useContext } from "react"
import { MapContext } from "../context/map";
import { PlacesContext } from "../context/places"

export const BtnMyLocation = () => {
    const { userLocation } = useContext(PlacesContext);
    const { map } = useContext(MapContext);

    const showMyLocation = () => {
        if(!map && !userLocation) return;

        map?.flyTo({
            center: userLocation
        });
    }

    return(
        <button className="btn btn-primary" style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: '10'
        }} onClick={showMyLocation}>
            My location
        </button>
    )
}