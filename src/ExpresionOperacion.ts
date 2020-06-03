import Expresion from "./Expresion";
import Contexto from "./Contexto"
import OperacionFactory from "./OperacionFactory";


export class ExpresionOperacion extends Expresion {

    public interpret(a : Contexto){
        let aux = a, aux2;
        if(aux.tipo == null){
            aux2 = this.traducirOperacion(aux)
            if(aux2!=null){
                a.valor = aux2
                a.tipo = this
            }
        }
    }

    public traducirOperacion(a:Contexto){
        let respuesta;
        const f = new OperacionFactory()
        if(a.expresionAdaptada.substring(0,5)=="sumar"){
            respuesta = f.factoryMethod("s");
        }
        else if(a.expresionAdaptada.substring(0,6)=="restar"){
            respuesta = f.factoryMethod("r");
        }
        else if(a.expresionAdaptada.substring(0,11)=="multiplicar"){
            respuesta = f.factoryMethod("p");
        }
        else if(a.expresionAdaptada.substring(0,7)=="dividir"){
            respuesta = f.factoryMethod("d");
        }
        else{
            respuesta = null;
        }
        return respuesta;
    }

}
