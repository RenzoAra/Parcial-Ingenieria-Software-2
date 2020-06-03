import { expect } from "chai";
import { Calculadora } from "../Calculadora";
import Contexto from "../Contexto";
import { ExpresionFactory } from "../ExpresionFactory";
import { ExpresionNumerica } from "../ExpresionNumerica";
import { ExpresionOperacion } from "../ExpresionOperacion";
import OperacionSuma from "../OperacionSuma"
import OperacionResta from "../OperacionResta"
import OperacionProducto from "../OperacionProducto"
import OperacionDivision from "../OperacionDivision"
import Parser from "../Parser";



describe('Contexto', function() {
  it('normalizar contexto', function() {
    const r = new Contexto("cero uno uno ");
    expect(r.expresionAdaptada).equal("cerounouno");
  });
});


describe('Operar contexto', function() {
    it('Sumador', function() {
      const f = new ExpresionFactory()
      const ex = f.factoryMethod("n")
      const con1 = new Contexto("nuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenueve")
      const con2 = new Contexto("uno")
      ex.interpret(con1)
      ex.interpret(con2)
      expect(con1.valor + con2.valor).equal(100000000000000000000000);
    });
  });

  describe('Operar contexto', function() {
    it('Restador', function() {
      const c = new Calculadora();
      const f = new ExpresionFactory()
      const ex = f.factoryMethod("n")
      const con1 = new Contexto("cerounodostrescuatrocincoseissieteochonueve")
      const con2 = new Contexto("  cuatro cincotresunouno  tres uno uno dos cuatrocuatro    nueveochounoceronueve  dos uno uno        ")
      ex.interpret(con1)
      ex.interpret(con2)
      expect(con1.valor - con2.valor).equal(-4531131124374652422);
    });
  });


  describe('Operar contexto', function() {
    it('Multiplicador', function() {
      const c = new Calculadora();
      const f = new ExpresionFactory()
      const ex = f.factoryMethod("n")
      const con1 = new Contexto("cerounodostrescuatrocincoseissieteochonueve")
      const con2 = new Contexto("  dos      ")
      ex.interpret(con1)
      ex.interpret(con2)
      expect(con1.valor * con2.valor).equal(246913578);
    });
  });


  describe('Operar contexto', function() {
    it('Divisor', function() {
      const c = new Calculadora();
      const f = new ExpresionFactory()
      const ex = f.factoryMethod("n")
      const con1 = new Contexto("cerounodostrescuatrocincoseissieteochonueve")
      const con2 = new Contexto("     dos        ")
      ex.interpret(con1)
      ex.interpret(con2)
      expect(con1.valor/ con2.valor).equal(61728394.5);
    });
  });

  describe('ExpresionFactory', function() {
    it('Crear ExpresionNumerica', function() {
      const f = new ExpresionFactory()
      const ex = f.factoryMethod("n")
      expect(ex instanceof ExpresionNumerica).equal(true);
    });
  });

  describe('ExpresionFactory', function() {
    it('Crear ExpresionOperacion', function() {
      const f = new ExpresionFactory()
      const ex = f.factoryMethod("o")
      expect(ex instanceof ExpresionOperacion).equal(true);
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir 10', function() {
      const r = new Contexto("unocero");
      const f = new ExpresionFactory()
      const ex = f.factoryMethod("n")
      ex.interpret(r)
      expect(r.valor).equal(10);
    });
  });
  

  describe('ExpresionNumerica', function() {
    it('traducir 100', function() {
      const r = new Contexto("uno cero cero");
      const f = new ExpresionFactory()
      const ex = f.factoryMethod("n")
      ex.interpret(r)
      expect(r.valor).equal(100);
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir 431', function() {
      const r = new Contexto("cuatrotresuno");
      const f = new ExpresionFactory()
      const ex = f.factoryMethod("n")
      ex.interpret(r)
      expect(r.valor).equal(431);
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir 549', function() {
      const r = new Contexto("    cero cerocinco cuatro   nueve                           ");
      const f = new ExpresionFactory()
      const ex = f.factoryMethod("n")
      ex.interpret(r)
      expect(r.valor).equal(549);
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir 45311311', function() {
      const r = new Contexto("  cuatro cincotresunouno  tres uno uno");
      const f = new ExpresionFactory()
      const ex = f.factoryMethod("n")
      ex.interpret(r)
      expect(r.valor).equal(45311311);
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir 4531131124498109211', function() {
      const r = new Contexto("  cuatro cincotresunouno  tres uno uno dos cuatrocuatro    nueveochounoceronueve  dos uno uno        ");
      const f = new ExpresionFactory()
      const ex = f.factoryMethod("n")
      ex.interpret(r)
      expect(r.valor).equal(4531131124498109211);
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir 0123456789', function() {
      const r = new Contexto("cerounodostrescuatrocincoseissieteochonueve");
      const f = new ExpresionFactory()
      const ex = f.factoryMethod("n")
      ex.interpret(r)
      expect(r.valor).equal(123456789);
    });
  });

  describe('ExpresionNumerica', function() {
    it('Mantener comando introducido', function() {
      const r = new Contexto("  cuatro cincotresunouno  tres uno uno dos cuatrocuatro    nueveochounoceronueve  dos uno uno        ");
      const f = new ExpresionFactory()
      const ex = f.factoryMethod("n")
      ex.interpret(r)
      expect(r.expresion).equal("  cuatro cincotresunouno  tres uno uno dos cuatrocuatro    nueveochounoceronueve  dos uno uno        ");
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir operacion a undefined', function() {
      const r = new Contexto("  sumar ");
      const f = new ExpresionFactory()
      const ex = f.factoryMethod("n")
      ex.interpret(r)
      expect(r.valor).equal(null);
    });
  });


  describe('ExpresionOperacion', function() {
    it('traducir suma', function() {
      const c = new Calculadora()
      const f = new ExpresionFactory()
      let listaContextos = []
      let listaExpresiones = []
      listaContextos.push(new Contexto("sumar"))
      listaExpresiones.push(f.factoryMethod("n")) 
      listaExpresiones.push(f.factoryMethod("o"))
      for(let j = 0; j < listaContextos.length; j++){
        let i = 0
        while(listaContextos[j].tipo==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i=i+1;
        }
      }
      expect(listaContextos[0].valor instanceof OperacionSuma).equal(true);
    });
  });

  describe('ExpresionOperacion', function() {
    it('traducir resta', function() {
      const c = new Calculadora()
      const f = new ExpresionFactory()
      let listaContextos = []
      let listaExpresiones = []
      listaContextos.push(new Contexto("restar"))
      listaExpresiones.push(f.factoryMethod("n")) 
      listaExpresiones.push(f.factoryMethod("o"))
      for(let j = 0; j < listaContextos.length; j++){
        let i = 0
        while(listaContextos[j].valor==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i=i+1;
        }
      }
      expect(listaContextos[0].valor instanceof OperacionResta).equal(true);
    });
  });

  describe('ExpresionOperacion', function() {
    it('traducir multiplicar', function() {
      const c = new Calculadora()
      const f = new ExpresionFactory()
      let listaContextos = []
      let listaExpresiones = []
      listaContextos.push(new Contexto("multiplicar"))
      listaExpresiones.push(f.factoryMethod("n")) 
      listaExpresiones.push(f.factoryMethod("o"))
      for(let j = 0; j < listaContextos.length; j++){
        let i = 0
        while(listaContextos[j].valor==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i=i+1;
        }
      }
      expect(listaContextos[0].valor instanceof OperacionProducto).equal(true);
    });
  });

  describe('ExpresionOperacion', function() {
    it('traducir dividir', function() {
      const c = new Calculadora()
      const f = new ExpresionFactory()
      let listaContextos = []
      let listaExpresiones = []
      listaContextos.push(new Contexto("dividir"))
      listaExpresiones.push(f.factoryMethod("n")) 
      listaExpresiones.push(f.factoryMethod("o"))
      for(let j = 0; j < listaContextos.length; j++){
        let i = 0
        while(listaContextos[j].valor==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i=i+1;
        }
      }
      expect(listaContextos[0].valor instanceof OperacionDivision).equal(true);
    });
  });

  describe('ExpresionOperacion', function() {
    it('traducir numero a ""', function() {
      const r = new Contexto("   unotres cero");
      const f = new ExpresionFactory()
      const ex = f.factoryMethod("o")
      ex.interpret(r)
      expect(r.valor).equal(null);
    });
  });

  describe('Traducir Contextos', function() {
    it('traducir operacion', function() {
      const r = new Contexto("dividir");
      const p = new Parser()
      p.evaluate(r)
      expect(r.valor instanceof OperacionDivision).equal(true);
    });
  });

  describe('Traducir Contextos', function() {
    it('traducir numero', function() {
      let listaExpresiones = [];
      const f = new ExpresionFactory()
      const r = new Contexto("  cuatro cincotresunouno  tres uno uno dos cuatrocuatro    nueveochounoceronueve  dos uno uno        ");
      listaExpresiones.push(f.factoryMethod("n")) 
      listaExpresiones.push(f.factoryMethod("o"))
      let i = 0
      while(r.valor==null){
        listaExpresiones[i].interpret(r)
        i++;
      }
      expect(r.valor).equal(4531131124498109211);
    });
  });

  describe('Traducir Contextos', function() {
    it('traducir numeros y sumarlos', function() {
      let listaExpresiones = [];
      let listaContextos = [];
      const f = new ExpresionFactory()
      listaContextos.push(new Contexto("nuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenueve")      ) 
      listaContextos.push(new Contexto("uno"))
      listaExpresiones.push(f.factoryMethod("n")) 
      listaExpresiones.push(f.factoryMethod("o"))
      for(let j = 0; j < 2; j++){
        let i = 0
        while(listaContextos[j].valor==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i++;
        }
      }
      expect(listaContextos[0].valor + listaContextos[1].valor).equal(100000000000000000000000);
    });
  });

  describe('Estado calculadora', function() {
    it('resultado', function() {
      let listaExpresiones = [];
      const f = new ExpresionFactory()
      const c = new Calculadora()
      const r = new Contexto("uno");
      listaExpresiones.push(f.factoryMethod("n")) 
      listaExpresiones.push(f.factoryMethod("o"))
      let i = 0
      while(r.valor==null){
        listaExpresiones[i].interpret(r)
        i++;
      }
      c.procesarNuevoElemento(r)
      expect(r.valor).equal(c.resultado);
    });
  });

  describe('Estado calculadora', function() {
    it('operacion', function() {
      let listaExpresiones = [];
      let listaContextos = [];
      const c = new Calculadora()
      const f = new ExpresionFactory()
      listaContextos.push(new Contexto("uno"));
      listaContextos.push(new Contexto("sumar"));
      listaExpresiones.push(f.factoryMethod("n")) 
      listaExpresiones.push(f.factoryMethod("o"))
      for(let j = 0; j < listaContextos.length; j++){
        let i = 0
        while(listaContextos[j].tipo==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i++;
        }
        c.procesarNuevoElemento(listaContextos[j])
      }
      expect(c.operacion instanceof OperacionSuma).equal(true);
    });
  });


  describe('Calculadora', function() {
    it('Suma', function() {
      let listaContextos = []
      const c = new Calculadora()
      const p = new Parser()
      listaContextos.push(new Contexto("nuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenueve")) 
      listaContextos.push(new Contexto("sumar"))
      listaContextos.push(new Contexto("uno"))
      for(let j = 0; j < listaContextos.length; j++){
        let i = 0
        while(listaContextos[j].tipo==null){
          p.evaluate(listaContextos[j])
          i=i+1;
        }
      }
      for(let j =0; j<listaContextos.length; j++){
        c.procesarNuevoElemento(listaContextos[j])
    }
      expect(c.resultado).equal(100000000000000000000000);
    });
  });


  describe('Calculadora', function() {
    it('Resta', function() {
      let listaContextos = []
      const c = new Calculadora()
      const p = new Parser()
      listaContextos.push(new Contexto("uno")) 
      listaContextos.push(new Contexto("restar"))
      listaContextos.push(new Contexto("uno"))
      for(let j = 0; j < listaContextos.length; j++){
        p.evaluate(listaContextos[j])
        c.procesarNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(0);
    });
  });


  describe('Calculadora', function() {
    it('Multiplicacion', function() {
      let listaContextos = []
      const c = new Calculadora()
      const p = new Parser()
      listaContextos.push(new Contexto("cincocerocero cero")) 
      listaContextos.push(new Contexto("multiplicar"))
      listaContextos.push(new Contexto(" cinco"))
      for(let j = 0; j < listaContextos.length; j++){
        p.evaluate(listaContextos[j])
        c.procesarNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(25000);
    });
  });


    describe('Calculadora', function() {
    it('Division', function() {
      let listaContextos = []
      const c = new Calculadora()
      const p = new Parser()
      listaContextos.push(new Contexto("doscero cero cero cero cerocero cero cero cero cerocero cero cero cero cerocero cero cero cero cerocero cero cero cero cerocero cero cero cero cero")) 
      listaContextos.push(new Contexto("dividir"))
      listaContextos.push(new Contexto("dos"))
      for(let j = 0; j < listaContextos.length; j++){
        p.evaluate(listaContextos[j])
        c.procesarNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(1000000000000000000000000000000);
    });
  });


  describe('Calculadora', function() {
    it('Caluclo completo 1', function() {
      let listaExpresiones = [];
      let listaContextos = [];
      const f = new ExpresionFactory()
      const p = new Parser()
      listaContextos.push(new Contexto("unocero")) 
      listaContextos.push(new Contexto("sumar"))
      listaContextos.push(new Contexto("unocero"))
      listaContextos.push(new Contexto("dividir")) 
      listaContextos.push(new Contexto("dos"))
      listaContextos.push(new Contexto("multiplicar"))
      listaContextos.push(new Contexto("unocero"))
      listaExpresiones.push(f.factoryMethod("n")) 
      listaExpresiones.push(f.factoryMethod("o"))
      const c = new Calculadora()
      for(let j = 0; j < listaContextos.length; j++){
        p.evaluate(listaContextos[j])
        c.procesarNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(100);
    });
  });



  describe('Calculadora', function() {
    it('Calculo Completo 2', function() {
      let listaContextos = []
      const c = new Calculadora()
      const p = new Parser()
      listaContextos.push(new Contexto("dos cinco")) 
      listaContextos.push(new Contexto("multiplicar"))
      listaContextos.push(new Contexto("dos"))
      listaContextos.push(new Contexto("dividir")) 
      listaContextos.push(new Contexto("cinco"))
      listaContextos.push(new Contexto("multiplicar"))
      listaContextos.push(new Contexto("unocero"))
      for(let j = 0; j < listaContextos.length; j++){
        p.evaluate(listaContextos[j])
        c.procesarNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(100);
    });
  });


  describe('Calculadora', function() {
    it('Calculo Completo 3', function() {
      let listaContextos = []
      const c = new Calculadora()
      const p = new Parser()
      listaContextos.push(new Contexto("dos cinco")) 
      listaContextos.push(new Contexto("dos"))
      listaContextos.push(new Contexto("dividir")) 
      listaContextos.push(new Contexto("cinco"))
      listaContextos.push(new Contexto("multiplicar"))
      listaContextos.push(new Contexto("unocero"))
      for(let j = 0; j < listaContextos.length; j++){
        p.evaluate(listaContextos[j])
        c.procesarNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(50);
    });
  });


  describe('Calculadora', function() {
    it('Calculo Completo 4', function() {
      let listaContextos = []
      const c = new Calculadora()
      const p = new Parser()
      listaContextos.push(new Contexto("divi di r"))
      listaContextos.push(new Contexto("tre scuatr o"))
      listaContextos.push(new Contexto("mult iplic ar")) 
      listaContextos.push(new Contexto("d os "))
      listaContextos.push(new Contexto("tre scuatr o"))
      listaContextos.push(new Contexto("mult iplic ar")) 
      listaContextos.push(new Contexto("d os dos"))
      listaContextos.push(new Contexto("mult iplic ar"))
      listaContextos.push(new Contexto("tr es"))
      for(let j = 0; j < listaContextos.length; j++){
        p.evaluate(listaContextos[j])
        c.procesarNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(2244);
    });
  });


  describe('Calculadora', function() {
    it('Calculo Completo Julian', function() {
      let listaContextos = []
      const c = new Calculadora()
      const p = new Parser()
      listaContextos.push(new Contexto("cin con uevecuat rodos")) 
      listaContextos.push(new Contexto("divi di r"))
      listaContextos.push(new Contexto("tre scuatr o"))
      listaContextos.push(new Contexto("mult iplic ar")) 
      listaContextos.push(new Contexto("d os t r e scuat roc inc o"))
      listaContextos.push(new Contexto("tre scuatr o"))
      listaContextos.push(new Contexto("mult iplic ar")) 
      listaContextos.push(new Contexto("d os t r e scuat roc inc o"))
      listaContextos.push(new Contexto("mult iplic ar"))
      listaContextos.push(new Contexto("tre scuatr o"))
      for(let j = 0; j < listaContextos.length; j++){
        p.evaluate(listaContextos[j])
        c.procesarNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(32675206549.999996);
    });
  });


  describe('Calculadora', function() {
    it('Calculo comandos', function() {
      let listaContextos = []
      const c = new Calculadora()
      const p = new Parser()
      listaContextos.push(new Contexto("in con uevecuat rodos"))
      listaContextos.push(new Contexto("ivi di r"))
      listaContextos.push(new Contexto("tre scuatr o  z cinco seis"))
      for(let j = 0; j < listaContextos.length; j++){
        p.evaluate(listaContextos[j])
        c.procesarNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(34);
    });
  });

  describe('Calculadora', function() {
    it('Calculo comandos 2', function() {
      let listaContextos = []
      const c = new Calculadora()
      const p = new Parser()
      listaContextos.push(new Contexto("in con uevecuat rodos")) 
      listaContextos.push(new Contexto("ivi di r"))
      listaContextos.push(new Contexto("re scuatr o"))
      for(let j = 0; j < listaContextos.length; j++){
        p.evaluate(listaContextos[j])
        c.procesarNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(0);
    });
  });

  describe('Calculadora', function() {
    it('Calculo comandos 3', function() {
      let listaContextos = []
      const c = new Calculadora()
      const p = new Parser()
      listaContextos.push(new Contexto("cin con uevecuat rodos")) 
      listaContextos.push(new Contexto("dividir"))
      listaContextos.push(new Contexto("re scuatr o"))
      for(let j = 0; j < listaContextos.length; j++){
        p.evaluate(listaContextos[j])
        c.procesarNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(5942);
    });
  });

  describe('Prueba Profesor', function() {
    it('Calculo 15 digitos', function() {
      let listaContextos = []
      const c = new Calculadora()
      const p = new Parser()
      let a = "", b = "uno"
      for(let i = 0 ; i < 15 ; i++){
        a = a.concat("nueve")
      }
      listaContextos.push(new Contexto(a))
      listaContextos.push(new Contexto("sumar"))
      listaContextos.push(new Contexto("uno"))
      for(let j = 0; j < listaContextos.length; j++){
        p.evaluate(listaContextos[j])
        c.procesarNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(1000000000000000);
    });
  });


  describe('Prueba Profesor', function() {
    it('Calculo 23 digitos', function() {
      let listaContextos = []
      const c = new Calculadora()
      const p = new Parser()
      let a = "", b = "uno"
      for(let i = 0 ; i < 23 ; i++){
        a = a.concat("nueve")
      }
      listaContextos.push(new Contexto(a))
      listaContextos.push(new Contexto("sumar"))
      listaContextos.push(new Contexto("uno"))
      for(let j = 0; j < listaContextos.length; j++){
        p.evaluate(listaContextos[j])
        c.procesarNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(100000000000000000000000);
    });
  });


  describe('Prueba Profesor', function() {
    it('Calculo 100 digitos', function() {
      let listaContextos = []
      const c = new Calculadora()
      const p = new Parser()
      let a = "", b = "uno"
      for(let i = 0 ; i < 100 ; i++){
        a = a.concat("nueve")
      }
      listaContextos.push(new Contexto(a))
      listaContextos.push(new Contexto("sumar"))
      listaContextos.push(new Contexto("uno"))
      for(let j = 0; j < listaContextos.length; j++){
        p.evaluate(listaContextos[j])
        c.procesarNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    });
  });


  describe('Prueba Profesor', function() {
    it('Calculo 1000 digitos con for', function() {
      let listaContextos = []
      const c = new Calculadora()
      const p = new Parser()
      let a = "", b = "1" ;
      for(let i = 0 ; i < 1000 ; i++){
        a = a.concat("nueve")
      }
      listaContextos.push(new Contexto(a))
      listaContextos.push(new Contexto("sumar"))
      listaContextos.push(new Contexto("uno"))
      for(let j = 0; j < listaContextos.length; j++){
        p.evaluate(listaContextos[j])
        c.procesarNuevoElemento(listaContextos[j])
      }
      for(let i = 0 ; i < 1000 ; i++){
        b = b.concat("0")
      }
      expect(c.resultado).equal(parseInt(b));
    });
  });


  describe('Prueba Profesor', function() {
    it('Calculo 10000 digitos con for', function() {
      let listaContextos = []
      const c = new Calculadora()
      const p = new Parser()
      let a = "", b = "1" ;
      for(let i = 0 ; i < 10000 ; i++){
        a = a.concat("nueve")
      }
      listaContextos.push(new Contexto(a))
      listaContextos.push(new Contexto("sumar"))
      listaContextos.push(new Contexto("uno"))
      for(let j = 0; j < listaContextos.length; j++){
        p.evaluate(listaContextos[j])
        c.procesarNuevoElemento(listaContextos[j])
      }
      for(let i = 0 ; i < 10000 ; i++){
        b = b.concat("0")
      }
      expect(c.resultado).equal(parseInt(b));
    });
  });