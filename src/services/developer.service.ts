import { Model } from "mongoose";
import { createObjectCsvStringifier } from "csv-writer";
import { pick } from "lodash";
import { Developer } from "../data/mongo/models/developer/interfaces";
export class DeveloperService {
  private static readonly developerCustomData: (keyof Developer | "_id")[] = [
    "username",
    "_id",
    "mainRol",
    "lastname",
    "email",
  ];
  constructor(private developerModel: Model<Developer>) {}

  async createDeveloper(developerDTO: Developer) {
    return await this.developerModel.create(developerDTO);
  }

  private parseDeveloperDataForCsv(developers: Developer[]) {
    return developers.map((developer) =>
      pick(developer, DeveloperService.developerCustomData)
    );
  }

  // TODO: abstract in order to pass filters and proyections
  async createReport() {
    const developers = await this.developerModel.find().lean();

    const parsedDevelopers = this.parseDeveloperDataForCsv(developers);

    const csvStringfier = createObjectCsvStringifier({
      header: DeveloperService.developerCustomData.map((key) => ({
        id: key,
        title: key,
      })),
    });

    return (
      csvStringfier.getHeaderString() +
      csvStringfier.stringifyRecords(parsedDevelopers)
    );
  }

  async createDevLangaugesReportByDev(devUsername: string) {
    const developer = await this.developerModel
      .findOne({ username: devUsername })
      .select({
        devLanguages: 1,
      })
      .lean();

    const languages = developer?.devLanguages ?? [];
    const [firstLanguage] = languages;

    if (!firstLanguage) throw new Error("There is not data");

    const csvStringfier = createObjectCsvStringifier({
      header: Object.keys(firstLanguage).map((key) => ({
        id: key,
        title: key,
      })),
    });

    return (
      csvStringfier.getHeaderString() +
      csvStringfier.stringifyRecords(languages)
    );
  }
}
