import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1Ijoib3prcm1vbnJveSIsImEiOiJjaXlmNWJvNDkwMGFkMzJvZWt1NDJnNzlvIn0.V_YsQfwis9wCTn2-vh4zmw'
    }
})

export default searchApi;