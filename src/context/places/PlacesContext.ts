import { createContext } from "react";

export interface PleacesContextProps {
    isLoading: boolean;
    userLocation?: [number, number];
}

export const PlacesContext = createContext<PleacesContextProps>({} as PleacesContextProps);