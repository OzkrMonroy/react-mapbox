import { MapProvider } from "./context/map"
import { PlacesProvider } from "./context/places"
import { HomeScreen } from "./screens"

export const MapsApp = () => {
    return (
        <PlacesProvider>
            <MapProvider>
                <HomeScreen/>
            </MapProvider>
        </PlacesProvider>
    )
}