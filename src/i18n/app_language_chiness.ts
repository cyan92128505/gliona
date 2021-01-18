import I18n from './language_proxy';
import env from '../config/env';

const zhTW: I18n = {
  app: {
    welcome: '嗨，%{name}',
    title: `${env.appName}`,
    error: {
      Success: '使用功能成功',
      Denied: '禁止使用功能',
      Disabled: '已關閉功能',
      Invalid: '操作異常',
      InvalidId: '使用非法 Id',
      InvalidSN: '使用非法 SN',
      InvalidSNActCode: '使用非法 QRCode',
      InvalidName: '使用非法 Name',
      InvalidKey: '使用非法 Key',
      InvalidVersion: '使用非法版本',
      NotFound: '無結果',
      AlreadyExisted: '資料已存在',
      NonEmpty: '資料非空',
      AuthDenied: '登入異常',
      ServerError: '伺服器錯誤',
      DataError: '資料錯誤',
      WriteError: '寫入錯誤',
      DetectError: '判斷錯誤',
    },
    locale: {
      title: '語系',
      zhTW: '繁體中文',
      enUS: 'English',
    },
  },
  resources: {
    setting: {
      name: '設定',
      fields: {
        version: '版本',
        sidebar: '側邊欄',
      },
    },
    buyer: {
      name: '買家 |||| 買家',
      fields: {
        id: '編號',
        name: '名稱',
        ratingTable: '評分表',
        description: '描述',
      },
    },
    buyerSchema: {
      name: '買家模板 |||| 買家模板',
      fields: {
        id: '編號',
        name: '名稱',
        ratingList: '評分基準',
        description: '描述',
      },
    },
    ratingType: {
      name: '評分類別 |||| 評分類別',
      fields: {
        id: '編號',
        name: '名稱',
        baseNumber: '基底分數',
      },
    },
    rating: {
      name: '評分 |||| 評分',
      fields: {
        id: '編號',
        name: '名稱',
        ratingType: '評分類別',
        score: '分數',
      },
    },
  },
};

export default zhTW;
