import mongoose from "mongoose";
import { MONGO_URI } from "../../config";


export class Conextion{
  private static instace: Conextion
  private constructor(){}

  static getConexion(){
    Conextion.instace ??= new Conextion()
    return Conextion.instace
  }

  async connect(){
    await mongoose.connect(MONGO_URI)
  }
}


mongoose.connection.addListener('error', error=>{
  console.log(error)
})

mongoose.connection.once('open', ()=>{
  console.log('conexion exitosa')
})
