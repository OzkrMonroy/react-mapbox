import { Map, Marker } from "mapbox-gl";
import { createContext } from "react";

export interface MapContextProps {
    isMapReady: boolean;
    map?: Map,
    setMap: (map: Map) => void;
    markers: Marker[];
}

export const MapContext = createContext<MapContextProps>({} as MapContextProps);