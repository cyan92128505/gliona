/* eslint-disable no-restricted-globals */
import { Box, makeStyles } from '@material-ui/core';
import { LatLngTuple, Icon, Map as LeafletMap } from 'leaflet';
import * as React from 'react';
import { CreateProps, EditProps, useInput } from 'react-admin';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Buyer } from '../../../models/repositories/buyer';
import { MapMarker2X, MapMarkerShadow } from '../icons/app_icons';

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '300px',
  },
}));

const LocationInput: React.FC<EditProps | CreateProps> = (props) => {
  const classes = useStyles();
  const { resource } = props;

  const locationXInput = useInput({
    resource,
    source: Buyer.propLocationX,
  });

  const locationYInput = useInput({
    resource,
    source: Buyer.propLocationY,
  });

  const center: LatLngTuple = [locationXInput.input.value || 23.7123419, locationYInput.input.value || 120.8480164];
  const [postion, setPostion] = React.useState(center);
  const whenCreated = (leafletMap: LeafletMap) => {
    if (!locationXInput.input.value || !locationYInput.input.value) {
      leafletMap.locate();
      leafletMap.addEventListener('locationfound', () => {
        const ccenter = leafletMap.getCenter();
        setPostion([ccenter.lat, ccenter.lng]);
        locationXInput.input.onChange(ccenter.lat);
        locationYInput.input.onChange(ccenter.lng);
      });
    }
    leafletMap.addEventListener('move', (event) => {
      const ccenter = leafletMap.getCenter();
      setPostion([ccenter.lat, ccenter.lng]);
    });
    leafletMap.addEventListener('moveend', (event) => {
      const ccenter = leafletMap.getCenter();
      setPostion([ccenter.lat, ccenter.lng]);
      locationXInput.input.onChange(ccenter.lat);
      locationYInput.input.onChange(ccenter.lng);
    });
  };
  const markerIcon = new Icon({
    iconUrl: MapMarker2X,
    shadowUrl: MapMarkerShadow,
  });
  return (
    <Box mt={3} mb={2}>
      <MapContainer
        className={classes.mapContainer}
        center={center}
        zoom={14}
        scrollWheelZoom={false}
        whenCreated={whenCreated}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker icon={markerIcon} position={postion} />
      </MapContainer>
    </Box>
  );
};

export default LocationInput;
