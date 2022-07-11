import { PlacesContext } from "./PlacesContext";

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
    return (
        <PlacesContext.Provider value={{...initialState}}>
            {children}
        </PlacesContext.Provider>
    )
}