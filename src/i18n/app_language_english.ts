import I18n from './language_proxy';
import env from '../config/env';

const enUs: I18n = {
  app: {
    welcome: 'Hi, %{name}',
    title: `${env.appName}`,
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
