import { ChangeEvent, useContext, useRef } from "react"
import { PlacesContext } from "../context/places";

export const SearchBar = () => {
    const { searchPlacesByTerm } = useContext(PlacesContext)
    const debounceRef = useRef<NodeJS.Timeout>();

    const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
        if(debounceRef.current)
            clearTimeout(debounceRef.current)
        
        debounceRef.current = setTimeout(() => {
            searchPlacesByTerm(event.target.value)
        }, 350);
    }

    return(
        <div className="search-container">
            <input type="text" className="form-control" placeholder="Search a place..." onChange={onQueryChanged}/>
        </div>
    )
}