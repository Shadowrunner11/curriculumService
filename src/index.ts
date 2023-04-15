import { PORT } from "./config";
import { Conextion } from "./data/mongo";
import { server } from "./server";


Conextion
  .getConexion()
  .connect()

server.listen(PORT, ()=>{
  console.log(`Listening on ://[::]: ${PORT}`)
})


