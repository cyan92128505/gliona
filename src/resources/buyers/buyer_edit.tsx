import { Box, makeStyles } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import {
  DateTimeInput,
  Edit,
  EditActionsProps,
  EditProps,
  ListButton,
  SimpleForm,
  TextInput,
  TopToolbar,
  useInput,
} from 'react-admin';
import { Icon, LatLngTuple, Map as LeafletMap } from 'leaflet';

import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from 'react-leaflet';

import SliderNumberInput from '../../components/shared/form/slider_number_input';

import { Buyer } from '../../models/repositories/buyer';
import { MapMarker2X, MapMarkerShadow } from '../../components/shared/icons/app_icons';
import LocationInput from '../../components/shared/form/location_input';

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '300px',
  },
}));

const EditActions: FC<EditActionsProps> = ({ basePath, data }) => (
  <TopToolbar>
    <ListButton basePath={basePath} record={data} />
  </TopToolbar>
);

const MapConponent: React.FC<EditProps> = (props) => {
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
  const center: LatLngTuple = [locationXInput.input.value, locationYInput.input.value];
  const [postion, setPostion] = useState(center);
  const whenCreated = (leafletMap: LeafletMap) => {
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

export const BuyerEdit: React.FC<EditProps> = (props) => {
  return (
    <Edit actions={<EditActions />} {...props}>
      <SimpleForm redirect="list">
        <TextInput fullWidth source={Buyer.propName} />
        <SliderNumberInput source={Buyer.propInterview} type="nubmer" required step={1} min={1} max={10} />
        <SliderNumberInput source={Buyer.propVisit} type="nubmer" required step={1} min={1} max={10} />
        <SliderNumberInput source={Buyer.propVet} type="nubmer" required step={1} min={1} max={10} />
        <SliderNumberInput source={Buyer.propDiabetic} type="nubmer" required step={1} min={1} max={10} />
        <SliderNumberInput source={Buyer.propOintment} type="nubmer" required step={1} min={1} max={10} />
        <SliderNumberInput source={Buyer.propPassenger} type="nubmer" required step={1} min={1} max={10} />
        <SliderNumberInput source={Buyer.propEnvironmental} type="nubmer" required step={1} min={1} max={10} />
        <TextInput fullWidth source={Buyer.propDescription} multiline rows={20} />
        <DateTimeInput fullWidth source={Buyer.propDatetime} />
        <LocationInput {...props} />
      </SimpleForm>
    </Edit>
  );
};
export default BuyerEdit;
