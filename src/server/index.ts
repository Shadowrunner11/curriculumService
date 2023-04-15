import express from 'express'
import PinoHttp from 'pino-http'
import { mainMiniApp } from '../routes'

export const server = express()

server
  .use(PinoHttp())
  .use('/api/v1', mainMiniApp)
