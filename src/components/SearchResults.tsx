import { useContext, useState } from "react"
import { MapContext } from "../context/map";
import { PlacesContext } from "../context/places"
import { Feature } from "../interfaces/places";

export const SearchResults = () => {
    const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
    const { map, getRouteBetweenPoints } = useContext(MapContext);
    const [activeId, setActiveId] = useState('')

    const onPlaceClicked = (place: Feature) => {
        const [lng, lat] = place.center
        map?.flyTo({
            center: [lng, lat]
        })
        setActiveId(place.id)
    }

    const getRoute = (place: Feature) => {
        if(!userLocation) return;
        
        const [lng, lat] = place.center;
        getRouteBetweenPoints(userLocation, [lng, lat])
    }

    if(isLoadingPlaces){
        return (
            <div className="alert alert-primary mt-2 text-center">
                <h6>Searching...</h6>
                <p>Please wait...</p>
            </div>
        )
    }

    return(
        <ul className={`list-group ${places.length > 0 && 'mt-3'}`}>
            {places.map(place => (
                    <li className={`list-group-item list-group-item-action pointer ${ activeId === place.id && 'active' }`} key={place.id} onClick={() => onPlaceClicked(place)}>
                        <h6>{place.text_es}</h6>
                        <p className={`${ activeId === place.id ? 'text-white' : 'text-muted' }`} style={{
                            fontSize: '12px'
                        }}>
                            {place.place_name_es}
                        </p>
                        <button className={`btn btn-sm ${activeId === place.id ? 'btn-light' : 'btn-outline-primary'}`} onClick={() => getRoute(place)}>Directions</button>
                    </li>
            ))}
        </ul>
    )
}