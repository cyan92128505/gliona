/* eslint-disable max-classes-per-file */
import GeneralResponse from '../general_response';

export class GroupInfo {
  GroupId: string;

  GroupName: string;

  get rawGroupName(): string {
    return `${this.GroupName}(${this.GroupId})`;
  }

  constructor(GroupId: string, GroupName: string) {
    this.GroupId = GroupId;
    this.GroupName = GroupName;
  }
}

export class SuperUserVerifyAccountEmailRequest {
  Email: string;

  constructor(Email: string) {
    this.Email = Email;
  }
}

export class SuperUserVerifyAccountEmailResponse extends GeneralResponse {
  DisplayName: string;

  UID: string;

  GroupList: GroupInfo[];

  constructor(Result: number, DisplayName: string, UID: string, GroupList: GroupInfo[]) {
    super(Result);
    this.DisplayName = DisplayName;
    this.UID = UID;
    this.GroupList = GroupList;
  }
}

export class SuperUserRebindingProductRequest {
  QRCode: string;

  UID: string;

  TargetGroupId: string;

  constructor(QRCode: string, UID: string, TargetGroupId: string) {
    this.QRCode = QRCode;
    this.UID = UID;
    this.TargetGroupId = TargetGroupId;
  }
}

export default { SuperUserVerifyAccountEmailRequest, SuperUserVerifyAccountEmailResponse };
