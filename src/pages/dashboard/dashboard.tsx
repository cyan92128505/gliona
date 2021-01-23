import 'leaflet/dist/leaflet.css';
import React, { useState, useEffect, ReactPropTypes, FC, useRef } from 'react';
import { makeStyles, Theme, useMediaQuery } from '@material-ui/core';
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
import { CustomTheme } from '../../theme/custom_theme';
import { TextUtils } from '../../utils/text_utils';

const defaultPosition: LatLngExpression = [25.0509145, 121.5344014];
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
    justifyContent: 'space-between',
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
  const translate = useTranslate();

  useEffect(() => {
    dataProviderInstance.getAllBuyerList().then((buyerList) => {
      const ctx = hiddenCanvas.current;
      const config = {
        type: 'line',

        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: TextUtils.SplitResourceName(translate(i18nProxy.resources.buyer.name())),
              backgroundColor: CustomTheme.palette.primary.main,
              borderColor: CustomTheme.palette.primary.main,
              data: [0, 1, 5, 2, 2, 1, 6],
            },
          ],
        },

        options: { maintainAspectRatio: false },
      };
      if (ctx) {
        const chart = new Chart(ctx, config);
      }
    });
  }, [translate]);
  return (
    <div className={classes.item}>
      <canvas ref={hiddenCanvas} />
    </div>
  );
};

function LandingLogo() {
  const translate = useTranslate();
  const classes = useStyles();
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));

  return (
    <div className={classes.emptyContainer}>
      <div className={classes.welcome}>
        <p className={classes.firstSentence}>
          {translate(i18nProxy.app.welcome(), { name: env.appName?.toUpperCase() })}
        </p>
        <p className={classes.lastSentence}>
          <Link to={`/${Buyer.resourceName}`}>{translate(i18nProxy.app.getStarted())}</Link>
        </p>
      </div>
      <VeterinarianLogo width={isSmall ? '100%' : '50%'} />
    </div>
  );
}

export function IntroPage() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Title defaultTitle={env.appName?.toUpperCase()} />
      <LandingLogo />
    </div>
  );
}

function Dashboard() {
  const classes = useStyles();
  const [isDataReady, SetDataReady] = useState(false);
  const [isDataExist, SetDataExist] = useState(false);
  const defaultPositions: Buyer[] = [];
  const [buyerMap, setBuyerMap] = useState(defaultPositions);

  const markerIcon = new Icon({
    iconUrl: MapMarker2X,
    shadowUrl: MapMarkerShadow,
  });

  useEffect(() => {
    dataProviderInstance
      .getList(Buyer.resourceName, {
        pagination: {
          page: 1,
          perPage: 1000,
        },
        sort: {
          field: Buyer.propDatetime,
          order: '',
        },
        filter: null,
      })
      .then((values) => {
        SetDataReady(!!values);
        if (values.total > 0) {
          SetDataExist(true);

          setBuyerMap(
            values.data
              .filter((b) => !!b.locationX && !!b.locationY)
              .map((b) => ({
                total: 0,
                id: +b.id,
                name: b.name,
                description: b.description,
                interview: b.interview,
                visit: b.visit,
                vet: b.vet,
                diabetic: b.diabetic,
                ointment: b.ointment,
                passenger: b.passenger,
                environmental: b.environmental,
                locationX: b.locationX,
                locationY: b.locationY,
                datetime: b.datetime,
              }))
          );
        }
      });
  }, []);

  return (
    <div className={classes.wrapper}>
      <Title defaultTitle={env.appName?.toUpperCase()} />
      {isDataReady && isDataExist ? (
        <div className={classes.container}>
          <VetLineChart />
          <MapContainer className={classes.item} center={defaultPosition} zoom={13} scrollWheelZoom>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {buyerMap.map((b) => (
              <Marker icon={markerIcon} position={[b.locationX, b.locationY]}>
                <Popup>{b.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      ) : (
        <LandingLogo />
      )}
    </div>
  );
}

export default Dashboard;
