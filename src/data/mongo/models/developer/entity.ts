import type { IDescription, IPhone, IPhoto } from "./interfaces";

export class Description implements IDescription {
  text: string;
  type: string;
}

export class Phone implements IPhone {
  number: string;
  areaCode: string;
  type: string;
  isDefault: boolean;
}

export class Photo implements IPhoto {
  url: string;
  type: string;
}
