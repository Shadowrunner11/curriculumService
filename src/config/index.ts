import { getEnvOrThrows } from "../tools";

export const MONGO_URI = getEnvOrThrows('MONGO_URI')

export const PORT = Number(process.env.PORT) || 3000


