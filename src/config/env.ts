import packageJson from '../../package.json';

class Enviroment {
  appName = process.env.REACT_APP_NAME;

  appCompanyName = process.env.REACT_APP_COMPANY_NAME;

  appProductName = process.env.REACT_APP_PRODUCT_NAME;

  get appFullName(): string {
    return `${this.appCompanyName} ${this.appProductName}`;
  }

  apiEndPoint = process.env.REACT_APP_END_POINT;

  get copyRight(): string {
    return `© ${new Date().getFullYear()} ${this.appCompanyName} Co., Ltd. All Rights Reserved.`;
  }

  version = packageJson.version;
}

export default new Enviroment();
