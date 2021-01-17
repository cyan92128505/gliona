import GeneralResponse from '../general_response';

class AccountInfo extends GeneralResponse {
  Email: string;

  SuperUser: boolean;

  constructor(Result: number, Email: string, SuperUser: boolean) {
    super(Result);
    this.Email = Email;
    this.SuperUser = SuperUser;
  }
}

export default AccountInfo;
