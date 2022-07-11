import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';
import './index.css'

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
