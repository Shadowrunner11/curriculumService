import { Request, Response, Router } from "express";
import { Developer } from "../data/mongo/models/devolper";
import { checkSchema, validationResult } from "express-validator";
import { developerValidationSchema } from "../data/validationSchemas/developerSchema";
import { validation } from "../data/middlewares/validation";

export const mainMiniApp = Router()

mainMiniApp
  .post('/report', (_, res)=>{

      res.type('text/csv').send()
  })
  .post(
    '/testValidation', 
    checkSchema(developerValidationSchema, ['body']), 
    validation,
    (req: Request, res: Response)=>{
        const body : Developer = req.body

        res.json(body)
  })

