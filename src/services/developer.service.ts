import { Model } from "mongoose";
import { Developer } from "../data/mongo/models/developer/interfaces";

export class DeveloperService {
  constructor(private developerModel: Model<Developer>) {}

  createDeveloper(developerDTO: Developer) {
    return this.developerModel.create(developerDTO);
  }
}
