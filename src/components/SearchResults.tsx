import { useContext } from "react"
import { PlacesContext } from "../context/places"

export const SearchResults = () => {
    const { places, isLoadingPlaces } = useContext(PlacesContext);

    if(isLoadingPlaces){
        return (
            <div className="alert alert-primary mt-2 text-center">
                <h6>Searching...</h6>
                <p>Please wait...</p>
            </div>
        )
    }

    return(
        <ul className={`list-group ${places.length > 0 && 'mt-3'}`}>
            {places.map(place => (
                    <li className="list-group-item list-group-item-action" key={place.id}>
                        <h6>{place.text_es}</h6>
                        <p className="text-muted" style={{
                            fontSize: '12px'
                        }}>
                            {place.place_name_es}
                        </p>
                        <button className="btn btn-outline-primary btn-sm">Directions</button>
                    </li>
            ))}
        </ul>
    )
}