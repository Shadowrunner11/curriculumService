import type { Schema } from 'express-validator';
import type { Developer } from '../mongo/models/devolper';

export const developerValidationSchema: Schema<keyof Developer> = {
  username: {
    isString: {bail: true}
  },
  descriptions: {
    isArray: {bail: true}
  },
  firstname: {
    isAlpha: {bail: true}
  },
  lastname: {
    isAlpha: {bail: true}
  },
  email: {
    isEmail: {bail: true},
  },
  birthDay:{
    optional: true,
    isDate: true
  },
  languages:{
    optional: true,
    isObject: true
  },
  frameworks: {
    optional: true,
    isArray: true
  },
  tools: {
    optional: true,
    isArray: true
  }
}
