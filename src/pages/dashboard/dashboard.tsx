import 'leaflet/dist/leaflet.css';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import './dashboard.css';

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: '600px',
  },
}));

function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <MapContainer className={classes.main} center={[23.7393441, 120.4262101]} zoom={10} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default Dashboard;
