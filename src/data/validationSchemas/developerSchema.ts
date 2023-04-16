import type { Schema } from "express-validator";
import type { Developer } from "../mongo/models/developer/interfaces";

export const developerValidationSchema: Schema<keyof Developer> = {
  username: {
    isString: { bail: true },
  },
  descriptions: {
    isObject: { bail: true },
  },
  firstname: {
    isAlpha: { bail: true },
  },
  lastname: {
    isAlpha: { bail: true },
  },
  email: {
    isEmail: { bail: true },
  },
  birthDay: {
    optional: true,
    isDate: true,
  },
  frameworks: {
    optional: true,
    isArray: true,
  },
  tools: {
    optional: true,
    isArray: true,
  },
  devLanguages: {
    optional: true,
    isArray: true,
  },
};
