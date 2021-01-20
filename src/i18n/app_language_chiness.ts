import I18n from './language_proxy';
import env from '../config/env';

const zhTW: I18n = {
  app: {
    welcome: '嗨，%{name}',
    title: `${env.appName}`,
    import: '匯入',
    draw: '求籤',
    darwId: '第%{id}籤',
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
    jennider: {
      name: '淺草籤',
      fields: {
        question: '問題',
        result: '結果',
        datetime: '時間',
      },
    },
    setting: {
      name: '設定',
      fields: {
        version: '版本',
        sidebar: '側邊欄',
      },
    },
    buyer: {
      name: '獸醫院 |||| 獸醫院列表',
      fields: {
        id: '編號',
        name: '名稱',
        ratingTable: '評分表',
        description: '描述',
        interview: '訪談程度',
        visit: '拜訪次數',
        vet: '醫師數量',
        diabetic: '糖尿病患者數量',
        ointment: '藥膏患者數量',
        passenger: '客流量',
        environmental: '環境程度',
        total: '總分',
        datetime: '建立日期',
      },
    },
    buyerSchema: {
      name: '客戶模板 |||| 客戶模板列表',
      fields: {
        id: '編號',
        name: '名稱',
        ratingList: '評分基準',
        description: '描述',
      },
    },
    ratingType: {
      name: '評分類別 |||| 評分類別列表',
      fields: {
        id: '編號',
        name: '名稱',
        baseNumber: '基底分數',
      },
    },
    rating: {
      name: '評分 |||| 評分列表',
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
