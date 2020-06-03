import Expresion from "./Expresion";

export class Contexto {
    public tipo : Expresion = null;
    public expresion : string;
    public expresionAdaptada : string;
    public valor = null;

  
    constructor(a : string){
      this.expresion = a
      this.expresionAdaptada = this.adaptarContexto()
    }

    public adaptarContexto(){
      let aux = this.expresion, aux2 = this.expresion;

      aux2 = aux2.replace(" ", "")
      while(aux != aux2){
          aux = aux2 
          aux2 = aux2.replace(" ", "")
      }
      return this.expresionAdaptada = aux
  }

} export default Contexto