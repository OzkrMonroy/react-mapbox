import { PlacesProvider } from "./context/places"
import { HomeScreen } from "./screens"

export const MapsApp = () => {
    return (
        <PlacesProvider>
            <HomeScreen/>
        </PlacesProvider>
    )
}