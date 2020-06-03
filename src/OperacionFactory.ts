import Factory from "./Factory"
import OperacionSuma from "./OperacionSuma"
import OperacionResta from "./OperacionResta"
import OperacionProducto from "./OperacionProducto"
import OperacionDivision from "./OperacionDivision"

export class OperacionFactory extends Factory{

    public factoryMethod(tipo : string){
        let nuevaO
        switch(tipo){
            case "s":
                nuevaO = new OperacionSuma()
                break;

            case "r":
                nuevaO = new OperacionResta()
                break;

            case "p":
                nuevaO = new OperacionProducto()
                break;

            case "d":
                nuevaO = new OperacionDivision()
                break;    
        }
        return nuevaO
    }
}export default OperacionFactory