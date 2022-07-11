import { useReducer } from "react";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesReducer";

export interface PlaceState {
    isLoading: boolean;
    userLocation?: [number, number];
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

const initialState: PlaceState = {
    isLoading: true,
    userLocation: undefined
}

export const PlacesProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(placesReducer, initialState)
    return (
        <PlacesContext.Provider value={{...state}}>
            {children}
        </PlacesContext.Provider>
    )
}