/* eslint-disable no-restricted-globals */
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { useInput, UseInputValue } from 'react-admin';
import { LatLngTuple, Icon, Map as LeafletMap } from 'leaflet';
import { random } from 'lodash';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';

import { Buyer } from '../../../models/repositories/buyer';
import { MapMarker2X, MapMarkerShadow } from '../icons/app_icons';

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '300px',
  },
}));

export type LocationInputProps = {
  resource: string;
  sourceLocationX: string;
  sourceLocationY: string;
  isEdit: boolean;
};

type LocaitonMakerProps = {
  isEdit: boolean;
  position: LatLngTuple;
  setPosition: React.Dispatch<React.SetStateAction<LatLngTuple>>;
  locationXInput: UseInputValue;
  locationYInput: UseInputValue;
};

const LocationMaker: React.FC<LocaitonMakerProps> = (props) => {
  const { isEdit, locationXInput, locationYInput, position, setPosition } = props;

  const markerIcon = new Icon({
    iconUrl: MapMarker2X,
    shadowUrl: MapMarkerShadow,
  });

  const map = useMapEvents({
    locationfound(e) {
      if (`${locationXInput.input.value}`.length < 1 || `${locationYInput.input.value}`.length < 1) {
        setPosition([e.latlng.lat, e.latlng.lng]);
        locationXInput.input.onChange(e.latlng.lat);
        locationYInput.input.onChange(e.latlng.lng);
        map.flyTo(e.latlng, 14, {
          animate: false,
        });
      }
    },
    move(e) {
      if (!isEdit) {
        return;
      }
      const ccenter = map.getCenter();
      setPosition([ccenter.lat, ccenter.lng]);
    },
    moveend(e) {
      if (!isEdit) {
        return;
      }
      const ccenter = map.getCenter();
      setPosition([ccenter.lat, ccenter.lng]);
      locationXInput.input.onChange(ccenter.lat);
      locationYInput.input.onChange(ccenter.lng);
    },
  });

  useEffect(() => {
    if (`${locationXInput.input.value}`.length < 1 || `${locationYInput.input.value}`.length < 1) {
      map.locate();
    }
  }, [map, locationXInput, locationYInput]);

  return position === null ? null : <Marker icon={markerIcon} position={position} />;
};

const LocationInput: React.FC<LocationInputProps> = (props) => {
  const classes = useStyles();
  const { resource, isEdit, sourceLocationX, sourceLocationY } = props;

  const locationXInput = useInput({
    resource,
    source: sourceLocationX,
  });

  const locationYInput = useInput({
    resource,
    source: sourceLocationY,
  });

  const center: LatLngTuple = [locationXInput.input.value, locationYInput.input.value];
  const [position, setPosition] = React.useState(center);

  return (
    <Box mt={3} mb={3}>
      <MapContainer className={classes.mapContainer} center={position} zoom={14} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMaker
          isEdit={isEdit}
          locationXInput={locationXInput}
          locationYInput={locationYInput}
          position={position}
          setPosition={setPosition}
        />
      </MapContainer>
    </Box>
  );
};

export default LocationInput;
