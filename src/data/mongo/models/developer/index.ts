import { Schema, model } from "mongoose";
import type {
  DescriptionWithSecondaryData,
  HardSkill,
  Location,
  PhoneWithSecondaryData,
  SocialData,
  Tag,
} from "./interfaces";
import { Description, Phone, Photo } from "./entity";

const socialDataSchema = new Schema<SocialData>({
  name: String,
  url: String,
});

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

const phoneSchema = new Schema<PhoneWithSecondaryData>({
  areaCode: String,
  isDefault: Boolean,
  number: Number,
  type: String,
  secondaryData: [Phone],
});

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
