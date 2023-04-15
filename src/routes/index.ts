import { Router } from "express";
import { Developer } from "../data/mongo/models/devolper";

export const mainMiniApp = Router()

mainMiniApp
  .post('/report', (_, res)=>{

      res.type('text/csv').send()
  })
  .post('/', (req, res)=>{
      const body : Developer = req.body

     res.send('In process')
  })

