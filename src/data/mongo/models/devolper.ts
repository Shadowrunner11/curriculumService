import { Schema, model } from "mongoose";

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
  percentage: string;
  yearOfExperience: string;
  tags: Tag[];
}

// TODO: take model from linkedin
export interface Certifications {
  [x: string]: string;
}

export type WithSecondaryData<T> = T & { secondaryData?: T[] };

export interface IPhone {
  number: string;
  areaCode: string;
  type: string;
  isDefault: boolean;
}

export type PhoneWithSecondaryData = WithSecondaryData<IPhone>;

export interface Location {
  country: string;
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

export type DescriptionWithSecondaryData = WithSecondaryData<IDescription>;

export type PhotoWithSecondaryData = WithSecondaryData<IPhoto>;

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
  principalRoles: string[];
  languages: string[];
}

const socialDataSchema = new Schema<SocialData>({
  name: String,
  url: String,
});

class Description implements IDescription {
  text: string;
  type: string;
}

const descriptionSchema = new Schema<DescriptionWithSecondaryData>({
  text: String,
  type: String,
  secondaryData: [Description],
});

const locationSchema = new Schema<Location>({
  country: String,
});

const hardSkilSchema = new Schema<HardSkill>({
  name: String,
  percentage: Number,
  yearOfExperience: Number,
});

export class Phone implements IPhone {
  number: string;
  areaCode: string;
  type: string;
  isDefault: boolean;
}

const phoneSchema = new Schema<PhoneWithSecondaryData>({
  areaCode: String,
  isDefault: Boolean,
  number: Number,
  type: String,
  secondaryData: [Phone],
});

export class Photo implements IPhoto {
  url: string;
  type: string;
  isDefault?: boolean | undefined;
}

const photoSchema = new Schema<PhotoWithSecondaryData>({
  isDefault: Boolean,
  type: String,
  url: String,
  secondaryData: [Photo],
});

const tagSchema = new Schema<Tag>({
  label: String,
  related: [String],
  value: String,
});

const developerSchema = new Schema<Developer>(
  {
    username: { type: String, unique: true },
    availabletoTravel: Boolean,
    birthDay: Date,
    customHardSkills: { type: [hardSkilSchema] },
    descriptions: { type: descriptionSchema },
    email: String,
    firstname: String,
    lastname: String,
    frameworks: { type: [hardSkilSchema] },
    devLanguages: { type: [hardSkilSchema] },
    languages: [String],
    location: { type: locationSchema },
    phones: { type: phoneSchema },
    photos: { type: photoSchema },
    socialData: { type: [socialDataSchema] },
    tools: { type: [hardSkilSchema] },
    globalTags: { type: [tagSchema] },
    principalRoles: [String],
  },
  { timestamps: true }
);

export const devloperModel = model<Developer>("developer", developerSchema);
