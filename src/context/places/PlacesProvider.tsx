import { useEffect, useReducer } from "react";
import { searchApi } from "../../apis";
import { getUserLocation } from "../../helpers";
import { Feature, PlacesResponse } from "../../interfaces/places";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesReducer";

export interface PlaceState {
    isLoading: boolean;
    userLocation?: [number, number];
    isLoadingPlaces: boolean;
    places: Feature[]
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

const initialState: PlaceState = {
    isLoading: true,
    userLocation: undefined,
    places: [],
    isLoadingPlaces: false,
}

export const PlacesProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(placesReducer, initialState)

    useEffect(() => {
        getUserLocation()
            .then(coords => dispatch({
                type: 'setUserLocation',
                payload: coords
            }))
    }, [])

    const searchPlacesByTerm = async (query: string): Promise<Feature[]> => {
        if(query.trim().length === 0) return [];
        if(!state.userLocation) return [];
        
        dispatch({
            type: 'setLoadingPlaces'
        })

        const resp = await searchApi.get<PlacesResponse>(`${query}.json`, {
            params: {
                proximity: state.userLocation.join(',')
            }
        })

        dispatch({
            type: 'setPlaces',
            payload: resp.data.features
        })
        
        return resp.data.features;
    }

    return (
        <PlacesContext.Provider value={{...state, searchPlacesByTerm}}>
            {children}
        </PlacesContext.Provider>
    )
}