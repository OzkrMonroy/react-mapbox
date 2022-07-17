/*eslint import/no-webpack-loader-syntax: off */
//@ts-ignore
import { Map, Marker } from "!mapbox-gl";
import { createContext } from "react";

export interface MapContextProps {
    isMapReady: boolean;
    map?: Map,
    setMap: (map: Map) => void;
    markers: Marker[];
    getRouteBetweenPoints: (start: [number, number], end: [number, number]) => Promise<void>
}

export const MapContext = createContext<MapContextProps>({} as MapContextProps);