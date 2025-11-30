import express from "express"
import "dotenv/config.js"
import cors from "cors"
import con from "./repository/connect.js";
import addRotas from "./routes.js";

const servidor = express()
servidor.use(cors())
servidor.use(express.json())
// servir frontend estático (opcional): permita abrir navegador em http://localhost:porta/
servidor.use(express.static('frontend'))

addRotas(servidor)

const porta = process.env.api_porta || process.env.API_PORTA || process.env.PORT || 3000;
servidor.listen(porta, ()=> console.log(`Servidor iniciado em: http://localhost:${porta}`))
