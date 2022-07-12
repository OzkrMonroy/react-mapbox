import { Feature } from "../../interfaces/places";
import { PlaceState } from "./PlacesProvider";

type PlacesAction = { type: 'setUserLocation', payload: [number, number] }
    | { type: 'setPlaces', payload: Feature[] }
    | { type: 'setLoadingPlaces' }

export const placesReducer = (state: PlaceState, action: PlacesAction): PlaceState => {
    switch (action.type) {
        case 'setUserLocation':
            return {
                ...state,
                userLocation: action.payload,
                isLoading: false
            }
        case 'setLoadingPlaces':
            return {
                ...state,
                places: [],
                isLoadingPlaces: true,
            }
        case 'setPlaces':
            return {
                ...state,
                isLoadingPlaces: false,
                places: action.payload
            }
        default:
            return state;
    }
}