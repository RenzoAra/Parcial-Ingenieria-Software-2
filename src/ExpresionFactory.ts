import { ExpresionNumerica } from "./ExpresionNumerica"
import { ExpresionOperacion } from "./ExpresionOperacion"
import Factory from "./Factory"

export class ExpresionFactory extends Factory{

    public factoryMethod(tipo : string){
        let nuevaE
        if(tipo == "n"){
            nuevaE = new ExpresionNumerica()
        }
        else{
            nuevaE = new ExpresionOperacion()
        }
        return nuevaE
    }
}