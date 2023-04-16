import type { WithSecondaryData } from "../../../../types/utils";

export interface IdentityDocuments {
  uuid?: string;
  type?: string;
  isPrincipal?: boolean;
}

export interface SocialData {
  name: string;
  url: string;
}

// TODO: take model from linkedin
export interface Experiences {
  [x: string]: string;
}

// Hard skills should have another colection aside of these since
// we can have generic info abput a hard skil and custom info
// example, js ofor one developer cold be related to front end
// but for another for backend
// java could be related with microservices
// butr for another develepor not
export interface HardSkill {
  name: string;
  percentage: number;
  yearsOfExperience: number;
  tags: Tag[];
  level?: string;
}

// TODO: take model from linkedin
export interface Certifications {
  [x: string]: string;
}

export interface IPhone {
  number: string;
  areaCode: string;
  type: string;
  isDefault: boolean;
}

export interface IDescription {
  text: string;
  type: string;
}

export interface IPhoto {
  url: string;
  type: string;
  isDefault?: boolean;
}

export interface Tag {
  label: string;
  value: string;
  related: string[];
}

export interface IEmail {
  direction: string;
}

export interface Developer {
  username: string;
  descriptions: DescriptionWithSecondaryData;
  firstname: string;
  lastname: string;
  email: WithSecondaryData<IEmail>;
  birthDay?: string;
  location?: Location;
  availabletoTravel?: boolean;
  experiences?: Experiences[];
  certifications?: Certifications[];
  socialData?: SocialData[];
  identityDocuments?: IdentityDocuments[];
  devLanguages?: HardSkill[];
  frameworks?: HardSkill[];
  tools?: HardSkill[];
  customHardSkills?: HardSkill[];
  phones?: PhoneWithSecondaryData;
  photos?: PhotoWithSecondaryData;
  globalTags: Tag[];
  mainRol: string;
  roles: string[];
  languages: string[];
}

export type PhoneWithSecondaryData = WithSecondaryData<IPhone>;

export interface Location {
  country: string;
}

export type DescriptionWithSecondaryData = WithSecondaryData<IDescription>;

export type PhotoWithSecondaryData = WithSecondaryData<IPhoto>;
