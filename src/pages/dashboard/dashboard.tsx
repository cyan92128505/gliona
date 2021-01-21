import 'leaflet/dist/leaflet.css';
import React, { useState, useEffect, ReactPropTypes, FC, useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import { MapContainer, MapContainerProps, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import './dashboard.css';
import { Link, Title, useTranslate } from 'react-admin';
import { Icon, LatLngExpression } from 'leaflet';
import { Chart } from 'chart.js';

import env from '../../config/env';
import { MapMarker2X, MapMarkerShadow } from '../../components/shared/icons/app_icons';
import { dataProviderInstance } from '../../providers/data_provider';
import { Buyer } from '../../models/repositories/buyer';
import { i18nProxy } from '../../i18n/language_proxy';
import { VeterinarianLogo } from '../../components/shared/icons/veterinarian';

const defaultPosition: LatLngExpression = [23.7393441, 120.4262101];
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100%',
    alignItems: 'stretch',
  },
  container: {
    display: 'flex',
    width: '100%',
    flex: '0 1 100%',
    height: '100%',
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  emptyContainer: {
    display: 'flex',
    width: '100%',
    flex: '0 1 100%',
    height: '100%',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  item: {
    flex: '0 0 100%',
    maxHeight: '50%',
    minHeight: '50%',
    minWidth: '100%',
    maxWidth: '100%',
  },
  welcome: {
    paddingLeft: '70px',
    color: theme.palette.primary.main,
    fontSize: '18pt',
  },
  firstSentence: {
    fontWeight: 500,
    fontSize: '22pt',
    margin: '0',
    marginBottom: '8px',
    marginTop: '2px',
  },
  lastSentence: {
    fontFamily: '"Raleway"',
    margin: '0',
    fontWeight: 400,
    fontSize: '14pt',
  },
}));

const VetLineChart: FC = () => {
  const hiddenCanvas = useRef<HTMLCanvasElement>(null);
  const classes = useStyles();

  useEffect(() => {
    dataProviderInstance.getAllBuyerList().then((buyerList) => {
      const ctx = hiddenCanvas.current;
      const config = {
        type: 'line',

        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [0, 10, 5, 2, 20, 30, 45],
            },
          ],
        },

        options: { maintainAspectRatio: false },
      };
      if (ctx) {
        const chart = new Chart(ctx, config);
      }
    });
  }, []);
  return (
    <div className={classes.item}>
      <canvas ref={hiddenCanvas} />
    </div>
  );
};

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
  const translate = useTranslate();
  const classes = useStyles();
  const [isDataReady, SetDataReady] = useState(false);
  const [isDataExist, SetDataExist] = useState(false);

  useEffect(() => {
    dataProviderInstance
      .getList(Buyer.resourceName, {
        pagination: {
          page: 1,
          perPage: 0,
        },
        sort: {
          field: Buyer.propDatetime,
          order: '',
        },
        filter: null,
      })
      .then((values) => {
        SetDataReady(!!values);

        if (values.total !== 0) {
          SetDataExist(true);
        }
      });
  }, []);

  let element = (
    <div className={classes.emptyContainer}>
      <div className={classes.welcome}>
        <p className={classes.firstSentence}>
          {translate(i18nProxy.app.welcome(), { name: env.appName?.toUpperCase() })}
        </p>
        <p className={classes.lastSentence}>
          <Link to={`/${Buyer.resourceName}`}>{translate(i18nProxy.app.getStarted())}</Link>
        </p>
      </div>
      <VeterinarianLogo />
    </div>
  );

  if (isDataReady && isDataExist) {
    element = (
      <div className={classes.container}>
        <VetLineChart />
        <MapContainer className={classes.item} center={defaultPosition} zoom={12} scrollWheelZoom>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LocationMarker />
        </MapContainer>
      </div>
    );
  }

  return (
    <div className={classes.wrapper}>
      <Title defaultTitle={env.appName?.toUpperCase()} />
      {element}
    </div>
  );
}

export default Dashboard;
