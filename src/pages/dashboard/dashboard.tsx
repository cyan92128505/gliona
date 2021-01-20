import 'leaflet/dist/leaflet.css';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import './dashboard.css';
import { Title } from 'react-admin';
import { Icon, LatLngExpression } from 'leaflet';
import env from '../../config/env';
import { MapMarker2X, MapMarkerShadow } from '../../components/shared/icons/app_icons';

const defaultPosition: LatLngExpression = [23.7393441, 120.4262101];
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'stretch',
    height: '100%',
  },
  item: {
    width: '100%',
  },
}));

function LocationMarker() {
  const [position, setPosition] = useState(defaultPosition);
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });
  useEffect(() => {
    map.locate();
  }, [map]);

  const markerIcon = new Icon({
    iconUrl: MapMarker2X,
    shadowUrl: MapMarkerShadow,
  });

  return position === null ? null : (
    <Marker icon={markerIcon} position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Title defaultTitle={env.appName?.toUpperCase()} />
      <MapContainer className={classes.item} center={defaultPosition} zoom={10} scrollWheelZoom>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default Dashboard;
