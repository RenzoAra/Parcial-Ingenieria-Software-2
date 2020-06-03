import Calculadora from "./Calculadora";
import Parser from "./Parser";
import Contexto from "./Contexto";
import OperacionSuma from "./OperacionSuma";
import OperacionResta from "./OperacionResta";
import OperacionProducto from "./OperacionProducto";
import OperacionDivision from "./OperacionDivision";

const express = require('express'),
  es6Renderer = require('express-es6-template-engine'),
  app = express();
  
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
var body_parser = require('body-parser');
let c = new Calculadora();
let p = new Parser();
const PORT = process.env.PORT || 3001;

app.use(body_parser.urlencoded({extended:true}));

app.use('/', express.static('img'));

app.get('/', function(req, res) {
    mostrar(res, true)
  });

app.post('/',function(req,res){
    var entrada = req.body.textbox;
    let newC = new Contexto(entrada);
    mostrar(res, c.procesarNuevoElemento(p.evaluate(newC)))
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));


function mostrar(res, est){
    if(est == 1){
        if(c.operacion == null){
            res.render('index',{locals:{salida: c.resultado, salida2: ""}});
        }
        else if(c.operacion instanceof OperacionSuma){
            res.render('index',{locals:{salida: c.resultado.toString().concat(" +"), salida2: ""}});
        }
        else if(c.operacion instanceof OperacionResta){
            res.render('index',{locals:{salida: c.resultado.toString().concat(" -"), salida2: ""}});
        }
        else if(c.operacion instanceof OperacionProducto){
            res.render('index',{locals:{salida: c.resultado.toString().concat(" *"), salida2: ""}});
        }
        else if(c.operacion instanceof OperacionDivision){
            res.render('index',{locals:{salida: c.resultado.toString().concat(" /"), salida2: ""}});
        }
    }
    else if(est == 0){
        res.render('index', {locals: {salida: c.resultado, salida2: "Syntax Error."}});
    }
    else{
        if(c.operacion == null){
            res.render('index',{locals:{salida: c.resultado, salida2: "Comando Invalido."}});
        }
        else if(c.operacion instanceof OperacionSuma){
            res.render('index',{locals:{salida: c.resultado.toString().concat(" +"), salida2: "Comando Invalido."}});
        }
        else if(c.operacion instanceof OperacionResta){
            res.render('index',{locals:{salida: c.resultado.toString().concat(" -"), salida2: "Comando Invalido."}});
        }
        else if(c.operacion instanceof OperacionProducto){
            res.render('index',{locals:{salida: c.resultado.toString().concat(" *"), salida2: "Comando Invalido."}});
        }
        else if(c.operacion instanceof OperacionDivision){
            res.render('index',{locals:{salida: c.resultado.toString().concat(" /"), salida2: "Comando Invalido."}});
        }
    }
}

