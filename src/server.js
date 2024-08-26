import "dotenv/config";
import express from "express";
import cors from "cors";

//importação das rotas
import tarefaRouter from "./routes/tarefaRouter.js"

const PORT = process.env.PORT || 8080;

const app = express()

//3 middlewares 
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//utilizar rotas
app.use("/tarefas", tarefaRouter)   

app.use((req, res)=>{
    res.status(404).json({msg: "Rota não encontrada"})
})

app.listen(PORT, ()=>{
    console.log(`Servidor on http://localhost:${PORT}`)
})