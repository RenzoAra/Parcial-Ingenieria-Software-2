import { ExpresionFactory } from "./ExpresionFactory";
import Contexto from "./Contexto";

export class Parser {
    public parseTree = []
 
    public constructor() {
        const f = new ExpresionFactory()
        this.parseTree.push(f.factoryMethod("n")) 
        this.parseTree.push(f.factoryMethod("o"))
    }
 
    public evaluate(c : Contexto) {

        for(let i = 0; i < this.parseTree.length; i++){
            this.parseTree[i].interpret(c)
          }
            return c;
    }

 }export default Parser

