import { type Request, type Response, Router } from "express";
import { checkSchema } from "express-validator";
import { developerValidationSchema } from "../data/validationSchemas/developerSchema";
import { validation } from "../data/middlewares/validation";
import type { Developer } from "../data/mongo/models/developer/interfaces";

export const mainMiniApp = Router();

mainMiniApp
  .post("/report", (_, res) => {
    res.type("text/csv").send();
  })
  .post(
    "/testValidation",
    checkSchema(developerValidationSchema, ["body"]),
    validation,
    (req: Request, res: Response) => {
      const body: Developer = req.body;

      res.json(body);
    }
  );
