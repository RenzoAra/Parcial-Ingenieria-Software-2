import Expresion from "./Expresion";
import Contexto from "./Contexto"


export class ExpresionNumerica extends Expresion {

    public interpret(a : Contexto){
        let aux = "", aux2 = a, i = 0;
        let error = /o/gi; 
        while((aux2.expresionAdaptada!="")&&(aux.search(error) == -1)){
            aux = aux.concat(this.traducirNumero(aux2))
            i++;
        }
        if(aux=="o"||i==0){
            a.valor = null
        }
        else{
            a.valor = parseInt(aux)
            a.tipo = this
        }
    }


    public traducirNumero(a:Contexto){
        let respuesta

        if(a.expresionAdaptada.substring(0, 4) == "cero"){
            respuesta = "0";
            a.expresionAdaptada = a.expresionAdaptada.replace("cero", "");
        }
        else if(a.expresionAdaptada.substring(0, 3) == "uno"){
            respuesta = "1";
            a.expresionAdaptada = a.expresionAdaptada.replace("uno", "");
        }
        else if(a.expresionAdaptada.substring(0, 3) == "dos"){
            respuesta = "2";
            a.expresionAdaptada = a.expresionAdaptada.replace("dos", "");
        }
        else if(a.expresionAdaptada.substring(0, 4) == "tres"){
            respuesta = "3";
            a.expresionAdaptada = a.expresionAdaptada.replace("tres", "");
        }
        else if(a.expresionAdaptada.substring(0, 6) == "cuatro"){
            respuesta = "4";
            a.expresionAdaptada = a.expresionAdaptada.replace("cuatro", "");
        }
        else if(a.expresionAdaptada.substring(0, 5) == "cinco"){
            respuesta = "5";
            a.expresionAdaptada = a.expresionAdaptada.replace("cinco", "");
        }
        else if(a.expresionAdaptada.substring(0, 4) == "seis"){
            respuesta = "6";
            a.expresionAdaptada = a.expresionAdaptada.replace("seis", "");
        }
        else if(a.expresionAdaptada.substring(0, 5) == "siete"){
            respuesta = "7";
            a.expresionAdaptada = a.expresionAdaptada.replace("siete", "");
        }
        else if(a.expresionAdaptada.substring(0, 4) == "ocho"){
            respuesta = "8";
            a.expresionAdaptada = a.expresionAdaptada.replace("ocho", "");
        }
        else if(a.expresionAdaptada.substring(0, 5) == "nueve"){
            respuesta = "9";
            a.expresionAdaptada = a.expresionAdaptada.replace("nueve", "");
        }
        else{
            respuesta = "o";
        }
        return respuesta;
    }

}
