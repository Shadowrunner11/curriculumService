import type { Schema } from 'express-validator';
import type { Developer } from '../mongo/models/devolper';

export const developerValidationSchema = {
  username: {

  },
  // descriptions: Description[],
  // firstname: string,
  // lastname: string,
  email: {
    isEmail: true
  },
  // birthDay: string,
  // location:Location,
  // availabletoTravel?: boolean,
  // experiences?: Experiences[],
  // certifications?: Certifications[],
  // socialData?: SocialData[],
  // identityDocuments?: IdentityDocuments[],
  // languages?: HardSkill[],
  // frameworks?: HardSkill[],
  // tools?: HardSkill[],
  // customHardSkills?: HardSkill[],
  // phones?: Phone[],
  // photos?: Photo[]
}