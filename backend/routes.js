import express from "express";

const app = express();
app.use(express.json())

import cadastroController from "./controller/cadastroController.js"
import servicoController from "./controller/servicoController.js"
import vendaController from "./controller/vendaController.js"
import horarioBomController from "./controller/horarioBomController.js"
import configController from "./controller/configController.js"
export default function addRotas(servidor){
  servidor.use(cadastroController)
  servidor.use(servicoController)
  servidor.use(vendaController)
  servidor.use(horarioBomController)
  servidor.use(configController)
}