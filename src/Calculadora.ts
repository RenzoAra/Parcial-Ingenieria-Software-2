import Contexto from "./Contexto";
import { ExpresionOperacion } from "./ExpresionOperacion";
import { ExpresionNumerica } from "./ExpresionNumerica";


export class Calculadora {
    public resultado = 0
    public operando = null
    public operacion = null

    constructor(){
    }

    public procesarNuevoElemento(a : Contexto){
        if(a.tipo instanceof ExpresionOperacion){
            this.operacion = a.valor
            return 1
        }
        else if(a.tipo instanceof ExpresionNumerica){
            if(this.resultado == 0 && this.operacion == null){
                this.resultado = a.valor
                return 1
            }
            else if(this.operacion != null){
                this.operando = a.valor
                this.realizarOperacion()
                return 1
            }
            else{
                this.operando=null
                this.operacion = null
                return 0;
            }
        }
        else{
            this.operando=null
            return -1         
        }
    }

    public realizarOperacion(){
        this.resultado = this.operacion.implementar(this.resultado, this.operando)
        this.operacion = null
        this.operando = null
    }

}
export default Calculadora;