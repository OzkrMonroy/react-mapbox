import { PlaceState } from "./PlacesProvider";

type PlacesAction = {
    type: 'setUserLocation', payload: [number, number]
}

export const placesReducer = (state: PlaceState, action: PlacesAction): PlaceState => {
    switch (action.type) {
        case 'setUserLocation':
            return {
                ...state,
                userLocation: action.payload,
                isLoading: false
            }
    
        default:
            return state;
    }
}