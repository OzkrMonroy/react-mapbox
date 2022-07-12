import { Map, Marker, Popup } from "mapbox-gl";
import { useContext, useEffect, useReducer } from "react";
import { PlacesContext } from "../places";
import { MapContext } from "./MapContext"
import { mapReducer } from "./mapReducer";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export interface MapState {
    isMapReady: boolean;
    map?: Map;
    markers: Marker[];
}

const initialState: MapState = {
    isMapReady: false,
    map: undefined,
    markers: []
}

export const MapProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(mapReducer, initialState);
    const { places } = useContext(PlacesContext);

    useEffect(() => {
        state.markers.forEach(marker => marker.remove());
        const newMarkers: Marker[] = [];

        for (const place of places) {
            const [lng, lat] = place.center;
            const popup = new Popup()
                .setHTML(`
                    <h6>${place.text_es}</h6>
                    <p>${place.place_name_es}</p>
                `)
            
            const newMarker = new Marker()
                .setPopup(popup)
                .setLngLat([lng, lat])
                .addTo(state.map!)

            newMarkers.push(newMarker)
        }
        dispatch({
            type: 'setMarkers',
            payload: newMarkers
        })
    }, [places])

    const setMap = (map: Map) => {
        
        const myLocationPopup = new Popup()
            .setHTML(`
                <h4>I'm here!!</h4>
                <p>Somewhere in the world!</p>
            `)
        new Marker({ color: '#61DAFB' })
            .setLngLat(map.getCenter())
            .setPopup(myLocationPopup)
            .addTo(map)


        dispatch({
            type: 'setMap',
            payload: map
        })
    }

    return(
        <MapContext.Provider value={{...state, setMap}}>
            {children}
        </MapContext.Provider>
    )
}