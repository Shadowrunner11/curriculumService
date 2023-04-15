import { Schema, model } from "mongoose";

export interface IdentityDocuments{
  uuid?: string;
  type?: string;
  isPrincipal?: boolean;
}

export interface SocialData{
  name: string;
  url: string;
}

export interface Experiences{

}

export interface HardSkill{
  name: string;
  percentage: string;
  yearOfExperience: string;
}

export interface Certifications{

}

export interface Phone{
  number: string;
  areaCode: string;
  type: string;
  isDefault: boolean;
}

export interface Location{
  country: string
}

export interface Description {
  text: string;
  type: string;
  isDefault?: boolean;
}

export interface Photo{
  url: string;
  type: string;
  isDefault?: boolean
}

export interface Developer {
  username: string;
  descriptions: Description[];
  firstname: string;
  lastname: string;
  email: string;
  birthDay: string;
  location:Location;
  availabletoTravel?: boolean,
  experiences?: Experiences[];
  certifications?: Certifications[];
  socialData?: SocialData[];
  identityDocuments?: IdentityDocuments[];
  languages?: HardSkill[];
  frameworks?: HardSkill[];
  tools?: HardSkill[];
  customHardSkills?: HardSkill[];
  phones?: Phone[];
  photos?: Photo[]

}

const socialDataSchema = new Schema<SocialData>({
  name: String,
  url: String,
})

const descriptionSchema = new Schema<Description>({
  isDefault: Boolean,
  text: String,
  type: String
})

const locationSchema = new Schema<Location>({
  country: String
})

const hardSkilSchema = new Schema<HardSkill>({
  name: String,
  percentage: Number,
  yearOfExperience: Number
})

const phoneSchema = new Schema<Phone>({
  areaCode:String,
  isDefault: Boolean,
  number: Number,
  type: String
})

const photoSchema = new Schema<Photo>({
  isDefault: Boolean,
  type: String,
  url: String
})



// Consider chamginf models like these
/* 
emai:{
 principal: String,
 secondaries: String[]
}*/
const developerSchema = new Schema<Developer>({
  username: {type: String, unique: true},
  availabletoTravel: Boolean,
  birthDay: Date,
  customHardSkills: {type: [hardSkilSchema]},
  descriptions: {type: [descriptionSchema]},
  email: String,
  firstname: String,
  lastname: String,
  frameworks: {type: [hardSkilSchema]},
  languages: {type: [hardSkilSchema]},
  location: {type: locationSchema},
  phones: {type: [phoneSchema]},
  photos: {type: [photoSchema]},
  socialData: {type: [socialDataSchema]},
  tools: {type: [hardSkilSchema]}
}, {timestamps: true})


export const devloperModel = model<Developer>('developer', developerSchema)
