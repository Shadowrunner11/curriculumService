import { type Request, type Response, Router } from "express";
import { checkSchema } from "express-validator";
import { developerValidationSchema } from "../data/validationSchemas/developerSchema";
import { validation } from "../middlewares/validation";
import type { Developer } from "../data/mongo/models/developer/interfaces";
import { DeveloperService } from "../services/developer.service";
import { developerModel } from "../data/mongo/models/developer";

export const mainMiniApp = Router();

const developerService = new DeveloperService(developerModel);

const middlewaresValidation = [
  checkSchema(developerValidationSchema, ["body"]),
  validation,
];

mainMiniApp
  .post("/report", (_, res) => {
    res.type("text/csv").send();
  })
  .post("/", ...middlewaresValidation, async (res: Response, req: Request) => {
    const body: Developer = req.body;

    await developerService.createDeveloper(body);

    res.json(body);
  })
  .post(
    "/testValidation",
    ...middlewaresValidation,
    (req: Request, res: Response) => {
      const body: Developer = req.body;

      res.json(body);
    }
  );
