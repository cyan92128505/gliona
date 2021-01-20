import I18n from './language_proxy';
import env from '../config/env';

const enUs: I18n = {
  app: {
    welcome: 'Hi, %{name}',
    title: `${env.appName}`,
    import: 'Import',
    draw: 'draw',
    darwId: 'No.%{id}',
    error: {
      Success: 'Success',
      Denied: 'Denied',
      Disabled: 'Disabled',
      Invalid: 'Invalid',
      InvalidId: 'Invalid Id',
      InvalidSN: 'Invalid SN',
      InvalidSNActCode: 'Invalid QRCode',
      InvalidName: 'Invalid Name',
      InvalidKey: 'Invalid Key',
      InvalidVersion: 'Invalid Version',
      NotFound: 'Not Found',
      AlreadyExisted: 'Already Existed',
      NonEmpty: 'Non Empty',
      AuthDenied: 'Auth Denied',
      ServerError: 'Server Error',
      DataError: 'Data Error',
      WriteError: 'Write Error',
      DetectError: 'Detect Error',
    },
    locale: {
      title: 'Language',
      zhTW: '繁體中文',
      enUS: 'English',
    },
  },
  resources: {
    jennider: {
      name: 'draw lots',
      fields: {
        question: 'question',
        result: 'result',
        datetime: 'datetime',
      },
    },
    setting: {
      name: 'Setting',
      fields: {
        version: 'version',
        sidebar: 'sidebar',
      },
    },
    buyer: {
      name: 'Buyer |||| Buyers',
      fields: {
        id: 'id',
        name: 'name',
        ratingTable: 'ratingTable',
        description: 'description',
        interview: 'Interview',
        visit: 'Visit',
        vet: 'Vet',
        diabetic: 'Diabetic',
        ointment: 'Ointment',
        passenger: 'Passenger',
        environmental: 'Environmental',
        total: 'Total',
        datetime: 'Datetime',
      },
    },
    buyerSchema: {
      name: 'BuyerSchema |||| BuyerSchema',
      fields: {
        id: 'id',
        name: 'name',
        ratingList: 'ratingList',
        description: 'description',
      },
    },
    ratingType: {
      name: 'RatingType |||| RatingType',
      fields: {
        id: 'id',
        name: 'name',
        baseNumber: 'baseNumber',
      },
    },
    rating: {
      name: 'Rating |||| Rating',
      fields: {
        id: 'id',
        name: 'name',
        ratingType: 'ratingType',
        score: 'score',
      },
    },
  },
};

export default enUs;
