import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';
import './index.css'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1Ijoib3prcm1vbnJveSIsImEiOiJjaXlmNWJvNDkwMGFkMzJvZWt1NDJnNzlvIn0.V_YsQfwis9wCTn2-vh4zmw';

if(!navigator.geolocation){
  alert('Geolocation is not supported.');
  throw new Error('Geolocation is not supported for your shit!!')
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp/>
  </React.StrictMode>
);
