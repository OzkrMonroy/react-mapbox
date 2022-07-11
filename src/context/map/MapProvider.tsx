import { Map } from "mapbox-gl";
import { useReducer } from "react";
import { MapContext } from "./MapContext"
import { mapReducer } from "./mapReducer";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export interface MapState {
    isMapReady: boolean;
    map?: Map
}

const initialState: MapState = {
    isMapReady: false,
    map: undefined
}

export const MapProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(mapReducer, initialState)

    const setMap = (map: Map) => {
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